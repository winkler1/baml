use super::TypeWalker;
use internal_baml_schema_ast::ast::{self, Identifier};

/// A `class` declaration in the Prisma schema.
pub type TypeAliasWalker<'db> = super::Walker<'db, ast::TypeExpId>;
