use super::{
    helpers::{parsing_catch_all, Pair},
    parse_identifier::parse_identifier,
    parse_named_args_list::parse_named_argument_list,
    Rule,
};

use crate::{assert_correct_parser, ast::*, parser::parse_types::parse_field_type};

use internal_baml_diagnostics::{DatamodelError, Diagnostics};

/// Parses an assignment in the form of `keyword identifier = FieldType`.
///
/// It only works with type aliases for now, it's not generic over all
/// expressions.
pub(crate) fn parse_assignment(pair: Pair<'_>, diagnostics: &mut Diagnostics) -> Assignment {
    assert_correct_parser!(pair, Rule::type_alias);

    let span = pair.as_span();

    let mut consumed_definition_keyword = false;

    let mut identifier: Option<Identifier> = None;
    let mut field_type: Option<FieldType> = None;

    for current in pair.into_inner() {
        match current.as_rule() {
            Rule::identifier => {
                if !consumed_definition_keyword {
                    consumed_definition_keyword = true;
                    match current.as_str() {
                        "type" => {} // Ok, type alias.

                        other => diagnostics.push_error(DatamodelError::new_validation_error(
                            &format!("Unexpected keyword used in assignment: {other}"),
                            diagnostics.span(current.as_span()),
                        )),
                    }
                } else {
                    // There are two identifiers, the second one is the name of
                    // the type alias.
                    identifier = Some(parse_identifier(current, diagnostics));
                }
            }

            Rule::assignment => {} // Ok, equal sign.

            Rule::field_type => field_type = parse_field_type(current, diagnostics),

            _ => todo!(),
        }
    }

    match (identifier, field_type) {
        (Some(identifier), Some(field_type)) => Assignment {
            identifier,
            value: field_type,
            span: diagnostics.span(span),
        },

        _ => panic!("Encountered impossible type_alias declaration during parsing"),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::parser::{BAMLParser, Rule};
    use baml_types::TypeValue;
    use internal_baml_diagnostics::{Diagnostics, SourceFile};
    use pest::{consumes_to, fails_with, parses_to, Parser};

    fn parse_type_alias(input: &'static str) -> (Assignment, Diagnostics) {
        let path = "test.baml";
        let source = SourceFile::new_static(path.into(), input);

        let mut diagnostics = Diagnostics::new(path.into());
        diagnostics.set_source(&source);

        let pairs = BAMLParser::parse(Rule::type_alias, input)
            .unwrap()
            .next()
            .unwrap();

        let assignment = super::parse_assignment(pairs, &mut diagnostics);

        (assignment, diagnostics)
    }

    #[test]
    fn parse_type_alias_assignment_tokens() {
        parses_to! {
            parser: BAMLParser,
            input: "type Test = int",
            rule: Rule::type_alias,
            tokens: [
                type_alias(0, 15, [
                    identifier(0, 4, [single_word(0, 4)]),
                    identifier(5, 9, [single_word(5, 9)]),
                    assignment(10, 11),
                    field_type(12, 15, [
                        non_union(12, 15, [
                            identifier(12, 15, [single_word(12, 15)])
                        ])
                    ]),
                ])
            ]
        }

        // This is parsed as identifier ~ identifier because of how Pest handles
        // whitespaces.
        // https://github.com/pest-parser/pest/discussions/967
        fails_with! {
            parser: BAMLParser,
            input: "typeTest = int",
            rule: Rule::type_alias,
            positives: [Rule::identifier],
            negatives: [],
            pos: 9
        }
    }

    #[test]
    fn parse_union_type_alias() {
        let (assignment, diagnostics) = parse_type_alias("type Test = int | string");

        assert_eq!(
            assignment,
            Assignment {
                identifier: Identifier::Local("Test".into(), diagnostics.span_from(5, 9)),
                value: FieldType::Union(
                    FieldArity::Required,
                    vec![
                        FieldType::Primitive(
                            FieldArity::Required,
                            TypeValue::Int,
                            diagnostics.span_from(12, 15),
                            Some(vec![])
                        ),
                        FieldType::Primitive(
                            FieldArity::Required,
                            TypeValue::String,
                            diagnostics.span_from(18, 24),
                            Some(vec![])
                        )
                    ],
                    diagnostics.span_from(12, 24),
                    Some(vec![])
                ),
                span: diagnostics.span_from(0, 24),
            }
        )
    }
}
