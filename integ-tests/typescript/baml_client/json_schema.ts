// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { registerEnumDeserializer, registerObjectDeserializer } from '@boundaryml/baml-core/deserializer/deserializer';
import { JSONSchema7 } from 'json-schema';


const schema: JSONSchema7 = {
  "definitions": {
    "Category": {
      "title": "Category",
      "enum": [
        {
          "const": "Refund"
        },
        {
          "const": "CancelOrder"
        },
        {
          "const": "TechnicalSupport"
        },
        {
          "const": "AccountIssue"
        },
        {
          "const": "Question"
        }
      ]
    },
    "Category2": {
      "title": "Category2",
      "enum": [
        {
          "const": "Refund"
        },
        {
          "const": "CancelOrder"
        },
        {
          "const": "TechnicalSupport"
        },
        {
          "const": "AccountIssue"
        },
        {
          "const": "Question"
        }
      ]
    },
    "Category3": {
      "title": "Category3",
      "enum": [
        {
          "const": "Refund"
        },
        {
          "const": "CancelOrder"
        },
        {
          "const": "TechnicalSupport"
        },
        {
          "const": "AccountIssue"
        },
        {
          "const": "Question"
        }
      ]
    },
    "DataType": {
      "title": "DataType",
      "enum": [
        {
          "const": "Resume"
        },
        {
          "const": "Event"
        }
      ]
    },
    "EnumInClass": {
      "title": "EnumInClass",
      "enum": [
        {
          "const": "ONE"
        },
        {
          "const": "TWO"
        }
      ]
    },
    "EnumOutput": {
      "title": "EnumOutput",
      "enum": [
        {
          "const": "ONE"
        },
        {
          "const": "TWO"
        },
        {
          "const": "THREE"
        }
      ]
    },
    "NamedArgsSingleEnum": {
      "title": "NamedArgsSingleEnum",
      "enum": [
        {
          "const": "ONE"
        },
        {
          "const": "TWO"
        }
      ]
    },
    "NamedArgsSingleEnumList": {
      "title": "NamedArgsSingleEnumList",
      "enum": [
        {
          "const": "ONE"
        },
        {
          "const": "TWO"
        }
      ]
    },
    "OptionalTest_CategoryType": {
      "title": "OptionalTest_CategoryType",
      "enum": [
        {
          "const": "Aleph"
        },
        {
          "const": "Beta"
        },
        {
          "const": "Gamma"
        }
      ]
    },
    "OrderStatus": {
      "title": "OrderStatus",
      "enum": [
        {
          "const": "ORDERED"
        },
        {
          "const": "SHIPPED"
        },
        {
          "const": "DELIVERED"
        },
        {
          "const": "CANCELLED"
        }
      ]
    },
    "OverrideEnum": {
      "title": "OverrideEnum",
      "enum": [
        {
          "const": "ONE"
        },
        {
          "const": "TWO"
        }
      ]
    },
    "Tag": {
      "title": "Tag",
      "enum": [
        {
          "const": "Security"
        },
        {
          "const": "AI"
        },
        {
          "const": "Blockchain"
        }
      ]
    },
    "TestEnum": {
      "title": "TestEnum",
      "enum": [
        {
          "const": "A"
        },
        {
          "const": "B"
        },
        {
          "const": "C"
        },
        {
          "const": "D"
        },
        {
          "const": "E"
        },
        {
          "const": "F"
        },
        {
          "const": "G"
        }
      ]
    },
    "Blah": {
      "title": "Blah",
      "type": "object",
      "properties": {
        "prop4": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        }
      },
      "required": []
    },
    "ClassOptionalFields": {
      "title": "ClassOptionalFields",
      "type": "object",
      "properties": {
        "prop1": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        },
        "prop2": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        }
      },
      "required": []
    },
    "ClassOptionalOutput": {
      "title": "ClassOptionalOutput",
      "type": "object",
      "properties": {
        "prop1": {
          "type": "string"
        },
        "prop2": {
          "type": "string"
        }
      },
      "required": [
        "prop1",
        "prop2"
      ]
    },
    "ClassOptionalOutput2": {
      "title": "ClassOptionalOutput2",
      "type": "object",
      "properties": {
        "prop1": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        },
        "prop2": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        },
        "prop3": {
          "anyOf": [
            {
              "$ref": "#/definitions/Blah",
              "title": "Blah"
            },
            {
              "type": "null",
              "title": "null"
            }
          ],
          "default": null
        }
      },
      "required": []
    },
    "DynamicPropsClass": {
      "title": "DynamicPropsClass",
      "type": "object",
      "properties": {
        "prop1": {
          "type": "string"
        },
        "prop2": {
          "type": "string"
        },
        "prop3": {
          "type": "integer"
        }
      },
      "required": [
        "prop1",
        "prop2",
        "prop3"
      ]
    },
    "Email": {
      "title": "Email",
      "type": "object",
      "properties": {
        "subject": {
          "type": "string"
        },
        "body": {
          "type": "string"
        },
        "from_address": {
          "type": "string"
        }
      },
      "required": [
        "subject",
        "body",
        "from_address"
      ]
    },
    "Event": {
      "title": "Event",
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "date": {
          "type": "string"
        },
        "location": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "date",
        "location",
        "description"
      ]
    },
    "Message": {
      "title": "Message",
      "type": "object",
      "properties": {
        "role": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      },
      "required": [
        "role",
        "message"
      ]
    },
    "ModifiedOutput": {
      "title": "ModifiedOutput",
      "type": "object",
      "properties": {
        "reasoning": {
          "type": "string"
        },
        "answer": {
          "type": "string"
        }
      },
      "required": [
        "reasoning",
        "answer"
      ]
    },
    "NamedArgsSingleClass": {
      "title": "NamedArgsSingleClass",
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "key_two": {
          "type": "boolean"
        },
        "key_three": {
          "type": "integer"
        }
      },
      "required": [
        "key",
        "key_two",
        "key_three"
      ]
    },
    "OptionalClass": {
      "title": "OptionalClass",
      "type": "object",
      "properties": {
        "prop1": {
          "type": "string"
        },
        "prop2": {
          "type": "string"
        }
      },
      "required": [
        "prop1",
        "prop2"
      ]
    },
    "OptionalTest_Prop1": {
      "title": "OptionalTest_Prop1",
      "type": "object",
      "properties": {
        "omega_a": {
          "type": "string"
        },
        "omega_b": {
          "type": "integer"
        }
      },
      "required": [
        "omega_a",
        "omega_b"
      ]
    },
    "OptionalTest_ReturnType": {
      "title": "OptionalTest_ReturnType",
      "type": "object",
      "properties": {
        "omega_1": {
          "anyOf": [
            {
              "$ref": "#/definitions/OptionalTest_Prop1",
              "title": "OptionalTest_Prop1"
            },
            {
              "type": "null",
              "title": "null"
            }
          ],
          "default": null
        },
        "omega_2": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        },
        "omega_3": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/OptionalTest_CategoryType",
                "title": "OptionalTest_CategoryType"
              },
              {
                "type": "null",
                "title": "null"
              }
            ],
            "default": null
          }
        }
      },
      "required": [
        "omega_3"
      ]
    },
    "OrderInfo": {
      "title": "OrderInfo",
      "type": "object",
      "properties": {
        "order_status": {
          "$ref": "#/definitions/OrderStatus"
        },
        "tracking_number": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        },
        "estimated_arrival_date": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        }
      },
      "required": [
        "order_status"
      ]
    },
    "OverrideClass": {
      "title": "OverrideClass",
      "type": "object",
      "properties": {
        "prop1": {
          "type": "string"
        },
        "prop2": {
          "type": "string"
        }
      },
      "required": [
        "prop1",
        "prop2"
      ]
    },
    "RaysData": {
      "title": "RaysData",
      "type": "object",
      "properties": {
        "dataType": {
          "$ref": "#/definitions/DataType"
        },
        "value": {
          "anyOf": [
            {
              "$ref": "#/definitions/Resume",
              "title": "Resume"
            },
            {
              "$ref": "#/definitions/Event",
              "title": "Event"
            }
          ]
        }
      },
      "required": [
        "dataType",
        "value"
      ]
    },
    "Resume": {
      "title": "Resume",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "phone": {
          "type": "string"
        },
        "experience": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "education": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "skills": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name",
        "email",
        "phone",
        "experience",
        "education",
        "skills"
      ]
    },
    "SearchParams": {
      "title": "SearchParams",
      "type": "object",
      "properties": {
        "dateRange": {
          "type": [
            "integer",
            "null"
          ],
          "default": null
        },
        "location": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "jobTitle": {
          "anyOf": [
            {
              "$ref": "#/definitions/WithReasoning",
              "title": "WithReasoning"
            },
            {
              "type": "null",
              "title": "null"
            }
          ],
          "default": null
        },
        "company": {
          "anyOf": [
            {
              "$ref": "#/definitions/WithReasoning",
              "title": "WithReasoning"
            },
            {
              "type": "null",
              "title": "null"
            }
          ],
          "default": null
        },
        "description": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/WithReasoning"
          }
        },
        "tags": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/Tag",
                "title": "Tag"
              },
              {
                "type": "string",
                "title": "string"
              }
            ]
          }
        }
      },
      "required": [
        "location",
        "description",
        "tags"
      ]
    },
    "SomeClass2": {
      "title": "SomeClass2",
      "type": "object",
      "properties": {
        "prop1": {
          "type": "string"
        },
        "prop2": {
          "type": "string"
        }
      },
      "required": [
        "prop1",
        "prop2"
      ]
    },
    "TestClassAlias": {
      "title": "TestClassAlias",
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "key2": {
          "type": "string"
        },
        "key3": {
          "type": "string"
        },
        "key4": {
          "type": "string"
        },
        "key5": {
          "type": "string"
        }
      },
      "required": [
        "key",
        "key2",
        "key3",
        "key4",
        "key5"
      ]
    },
    "TestClassWithEnum": {
      "title": "TestClassWithEnum",
      "type": "object",
      "properties": {
        "prop1": {
          "type": "string"
        },
        "prop2": {
          "$ref": "#/definitions/EnumInClass"
        }
      },
      "required": [
        "prop1",
        "prop2"
      ]
    },
    "TestOutputClass": {
      "title": "TestOutputClass",
      "type": "object",
      "properties": {
        "prop1": {
          "type": "string"
        },
        "prop2": {
          "type": "integer"
        }
      },
      "required": [
        "prop1",
        "prop2"
      ]
    },
    "UnionTest_ReturnType": {
      "title": "UnionTest_ReturnType",
      "type": "object",
      "properties": {
        "prop1": {
          "anyOf": [
            {
              "type": "string",
              "title": "string"
            },
            {
              "type": "boolean",
              "title": "bool"
            }
          ]
        },
        "prop2": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "type": "number",
                "title": "float"
              },
              {
                "type": "boolean",
                "title": "bool"
              }
            ]
          }
        },
        "prop3": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "number"
              },
              "title": "float[]"
            },
            {
              "type": "array",
              "items": {
                "type": "boolean"
              },
              "title": "bool[]"
            }
          ]
        }
      },
      "required": [
        "prop1",
        "prop2",
        "prop3"
      ]
    },
    "WithReasoning": {
      "title": "WithReasoning",
      "type": "object",
      "properties": {
        "value": {
          "type": "string"
        },
        "reasoning": {
          "type": "string"
        }
      },
      "required": [
        "value",
        "reasoning"
      ]
    },
    "ClassifyConversation_input": {
      "type": "object",
      "properties": {
        "messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Message"
          }
        }
      },
      "required": [
        "messages"
      ],
      "title": "ClassifyConversation input"
    },
    "ClassifyMessage_input": {
      "type": "object",
      "properties": {
        "input": {
          "type": "string"
        }
      },
      "required": [
        "input"
      ],
      "title": "ClassifyMessage input"
    },
    "ClassifyMessage2_input": {
      "type": "object",
      "properties": {
        "input": {
          "type": "string"
        }
      },
      "required": [
        "input"
      ],
      "title": "ClassifyMessage2 input"
    },
    "ClassifyMessage3_input": {
      "type": "object",
      "properties": {
        "input": {
          "type": "string"
        }
      },
      "required": [
        "input"
      ],
      "title": "ClassifyMessage3 input"
    },
    "ExtractNames_input": {
      "type": "object",
      "properties": {
        "input": {
          "type": "string"
        }
      },
      "required": [
        "input"
      ],
      "title": "ExtractNames input"
    },
    "ExtractResume_input": {
      "type": "object",
      "properties": {
        "resume": {
          "type": "string"
        }
      },
      "required": [
        "resume"
      ],
      "title": "ExtractResume input"
    },
    "ExtractResume2_input": {
      "type": "object",
      "properties": {
        "resume": {
          "type": "string"
        }
      },
      "required": [
        "resume"
      ],
      "title": "ExtractResume2 input"
    },
    "FnClassOptional_input": {
      "anyOf": [
        {
          "$ref": "#/definitions/OptionalClass",
          "title": "OptionalClass"
        },
        {
          "type": "null",
          "title": "null"
        }
      ],
      "default": null,
      "title": "FnClassOptional input"
    },
    "FnClassOptional2_input": {
      "$ref": "#/definitions/ClassOptionalFields",
      "title": "FnClassOptional2 input"
    },
    "FnClassOptionalOutput_input": {
      "type": "string",
      "title": "FnClassOptionalOutput input"
    },
    "FnClassOptionalOutput2_input": {
      "type": "string",
      "title": "FnClassOptionalOutput2 input"
    },
    "FnEnumListOutput_input": {
      "type": "string",
      "title": "FnEnumListOutput input"
    },
    "FnEnumOutput_input": {
      "type": "string",
      "title": "FnEnumOutput input"
    },
    "FnNamedArgsSingleStringOptional_input": {
      "type": "object",
      "properties": {
        "myString": {
          "type": [
            "string",
            "null"
          ],
          "default": null
        }
      },
      "required": [
        "myString"
      ],
      "title": "FnNamedArgsSingleStringOptional input"
    },
    "FnOutputBool_input": {
      "type": "string",
      "title": "FnOutputBool input"
    },
    "FnOutputClass_input": {
      "type": "string",
      "title": "FnOutputClass input"
    },
    "FnOutputClassList_input": {
      "type": "string",
      "title": "FnOutputClassList input"
    },
    "FnOutputClassWithEnum_input": {
      "type": "string",
      "title": "FnOutputClassWithEnum input"
    },
    "FnOutputStringList_input": {
      "type": "string",
      "title": "FnOutputStringList input"
    },
    "FnStringOptional_input": {
      "type": [
        "string",
        "null"
      ],
      "default": null,
      "title": "FnStringOptional input"
    },
    "FnTestAliasedEnumOutput_input": {
      "type": "string",
      "title": "FnTestAliasedEnumOutput input"
    },
    "FnTestClassAlias_input": {
      "type": "string",
      "title": "FnTestClassAlias input"
    },
    "FnTestClassOverride_input": {
      "type": "string",
      "title": "FnTestClassOverride input"
    },
    "FnTestEnumOverride_input": {
      "type": "string",
      "title": "FnTestEnumOverride input"
    },
    "FnTestNamedArgsSingleEnum_input": {
      "type": "object",
      "properties": {
        "myArg": {
          "$ref": "#/definitions/NamedArgsSingleEnum"
        }
      },
      "required": [],
      "title": "FnTestNamedArgsSingleEnum input"
    },
    "FnTestOutputAdapter_input": {
      "type": "string",
      "title": "FnTestOutputAdapter input"
    },
    "GetDataType_input": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string"
        }
      },
      "required": [
        "text"
      ],
      "title": "GetDataType input"
    },
    "GetOrderInfo_input": {
      "type": "object",
      "properties": {
        "email": {
          "$ref": "#/definitions/Email"
        }
      },
      "required": [
        "email"
      ],
      "title": "GetOrderInfo input"
    },
    "GetQuery_input": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string"
        }
      },
      "required": [
        "query"
      ],
      "title": "GetQuery input"
    },
    "OptionalTest_Function_input": {
      "type": "string",
      "title": "OptionalTest_Function input"
    },
    "PromptTest_input": {
      "type": "string",
      "title": "PromptTest input"
    },
    "TestFnNamedArgsSingleBool_input": {
      "type": "object",
      "properties": {
        "myBool": {
          "type": "boolean"
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSingleBool input"
    },
    "TestFnNamedArgsSingleClass_input": {
      "type": "object",
      "properties": {
        "myArg": {
          "$ref": "#/definitions/NamedArgsSingleClass"
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSingleClass input"
    },
    "TestFnNamedArgsSingleEnumList_input": {
      "type": "object",
      "properties": {
        "myArg": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/NamedArgsSingleEnumList"
          }
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSingleEnumList input"
    },
    "TestFnNamedArgsSingleFloat_input": {
      "type": "object",
      "properties": {
        "myFloat": {
          "type": "number"
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSingleFloat input"
    },
    "TestFnNamedArgsSingleInt_input": {
      "type": "object",
      "properties": {
        "myInt": {
          "type": "integer"
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSingleInt input"
    },
    "TestFnNamedArgsSingleString_input": {
      "type": "object",
      "properties": {
        "myString": {
          "type": "string"
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSingleString input"
    },
    "TestFnNamedArgsSingleStringArray_input": {
      "type": "object",
      "properties": {
        "myStringArray": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSingleStringArray input"
    },
    "TestFnNamedArgsSingleStringList_input": {
      "type": "object",
      "properties": {
        "myArg": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSingleStringList input"
    },
    "TestFnNamedArgsSyntax_input": {
      "type": "object",
      "properties": {
        "var": {
          "type": "string"
        },
        "var_with_underscores": {
          "type": "string"
        }
      },
      "required": [],
      "title": "TestFnNamedArgsSyntax input"
    },
    "UnionTest_Function_input": {
      "anyOf": [
        {
          "type": "string",
          "title": "string"
        },
        {
          "type": "boolean",
          "title": "bool"
        }
      ],
      "title": "UnionTest_Function input"
    },
    "ClassifyConversation_output": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Category"
      },
      "title": "ClassifyConversation output"
    },
    "ClassifyMessage_output": {
      "$ref": "#/definitions/Category",
      "title": "ClassifyMessage output"
    },
    "ClassifyMessage2_output": {
      "$ref": "#/definitions/Category",
      "title": "ClassifyMessage2 output"
    },
    "ClassifyMessage3_output": {
      "$ref": "#/definitions/Category",
      "title": "ClassifyMessage3 output"
    },
    "ExtractNames_output": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "ExtractNames output"
    },
    "ExtractResume_output": {
      "$ref": "#/definitions/Resume",
      "title": "ExtractResume output"
    },
    "ExtractResume2_output": {
      "$ref": "#/definitions/Resume",
      "title": "ExtractResume2 output"
    },
    "FnClassOptional_output": {
      "type": "string",
      "title": "FnClassOptional output"
    },
    "FnClassOptional2_output": {
      "type": "string",
      "title": "FnClassOptional2 output"
    },
    "FnClassOptionalOutput_output": {
      "anyOf": [
        {
          "$ref": "#/definitions/ClassOptionalOutput",
          "title": "ClassOptionalOutput"
        },
        {
          "type": "null",
          "title": "null"
        }
      ],
      "default": null,
      "title": "FnClassOptionalOutput output"
    },
    "FnClassOptionalOutput2_output": {
      "anyOf": [
        {
          "$ref": "#/definitions/ClassOptionalOutput2",
          "title": "ClassOptionalOutput2"
        },
        {
          "type": "null",
          "title": "null"
        }
      ],
      "default": null,
      "title": "FnClassOptionalOutput2 output"
    },
    "FnEnumListOutput_output": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/EnumOutput"
      },
      "title": "FnEnumListOutput output"
    },
    "FnEnumOutput_output": {
      "$ref": "#/definitions/EnumOutput",
      "title": "FnEnumOutput output"
    },
    "FnNamedArgsSingleStringOptional_output": {
      "type": "string",
      "title": "FnNamedArgsSingleStringOptional output"
    },
    "FnOutputBool_output": {
      "type": "boolean",
      "title": "FnOutputBool output"
    },
    "FnOutputClass_output": {
      "$ref": "#/definitions/TestOutputClass",
      "title": "FnOutputClass output"
    },
    "FnOutputClassList_output": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/TestOutputClass"
      },
      "title": "FnOutputClassList output"
    },
    "FnOutputClassWithEnum_output": {
      "$ref": "#/definitions/TestClassWithEnum",
      "title": "FnOutputClassWithEnum output"
    },
    "FnOutputStringList_output": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "FnOutputStringList output"
    },
    "FnStringOptional_output": {
      "type": "string",
      "title": "FnStringOptional output"
    },
    "FnTestAliasedEnumOutput_output": {
      "$ref": "#/definitions/TestEnum",
      "title": "FnTestAliasedEnumOutput output"
    },
    "FnTestClassAlias_output": {
      "$ref": "#/definitions/TestClassAlias",
      "title": "FnTestClassAlias output"
    },
    "FnTestClassOverride_output": {
      "$ref": "#/definitions/OverrideClass",
      "title": "FnTestClassOverride output"
    },
    "FnTestEnumOverride_output": {
      "$ref": "#/definitions/OverrideEnum",
      "title": "FnTestEnumOverride output"
    },
    "FnTestNamedArgsSingleEnum_output": {
      "type": "string",
      "title": "FnTestNamedArgsSingleEnum output"
    },
    "FnTestOutputAdapter_output": {
      "type": "string",
      "title": "FnTestOutputAdapter output"
    },
    "GetDataType_output": {
      "$ref": "#/definitions/RaysData",
      "title": "GetDataType output"
    },
    "GetOrderInfo_output": {
      "$ref": "#/definitions/OrderInfo",
      "title": "GetOrderInfo output"
    },
    "GetQuery_output": {
      "$ref": "#/definitions/SearchParams",
      "title": "GetQuery output"
    },
    "OptionalTest_Function_output": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "$ref": "#/definitions/OptionalTest_ReturnType",
            "title": "OptionalTest_ReturnType"
          },
          {
            "type": "null",
            "title": "null"
          }
        ],
        "default": null
      },
      "title": "OptionalTest_Function output"
    },
    "PromptTest_output": {
      "type": "string",
      "title": "PromptTest output"
    },
    "TestFnNamedArgsSingleBool_output": {
      "type": "string",
      "title": "TestFnNamedArgsSingleBool output"
    },
    "TestFnNamedArgsSingleClass_output": {
      "type": "string",
      "title": "TestFnNamedArgsSingleClass output"
    },
    "TestFnNamedArgsSingleEnumList_output": {
      "type": "string",
      "title": "TestFnNamedArgsSingleEnumList output"
    },
    "TestFnNamedArgsSingleFloat_output": {
      "type": "string",
      "title": "TestFnNamedArgsSingleFloat output"
    },
    "TestFnNamedArgsSingleInt_output": {
      "type": "string",
      "title": "TestFnNamedArgsSingleInt output"
    },
    "TestFnNamedArgsSingleString_output": {
      "type": "string",
      "title": "TestFnNamedArgsSingleString output"
    },
    "TestFnNamedArgsSingleStringArray_output": {
      "type": "string",
      "title": "TestFnNamedArgsSingleStringArray output"
    },
    "TestFnNamedArgsSingleStringList_output": {
      "type": "string",
      "title": "TestFnNamedArgsSingleStringList output"
    },
    "TestFnNamedArgsSyntax_output": {
      "type": "string",
      "title": "TestFnNamedArgsSyntax output"
    },
    "UnionTest_Function_output": {
      "$ref": "#/definitions/UnionTest_ReturnType",
      "title": "UnionTest_Function output"
    }
  }
};

registerEnumDeserializer(schema.definitions.Category, {

});

registerEnumDeserializer(schema.definitions.Category2, {

});

registerEnumDeserializer(schema.definitions.Category3, {
  "k1": "Refund",
  "k1: Customer wants to refund a product": "Refund",
  "k2": "CancelOrder",
  "k2: Customer wants to cancel an order": "CancelOrder",
  "k3": "TechnicalSupport",
  "k3: Customer needs help with a technical issue unrelated to account creation or login": "TechnicalSupport",
  "k4": "AccountIssue",
  "k4: Specifically relates to account-login or account-creation": "AccountIssue",
  "k5": "Question",
  "k5: Customer has a question": "Question"
});

registerEnumDeserializer(schema.definitions.DataType, {

});

registerEnumDeserializer(schema.definitions.EnumInClass, {

});

registerEnumDeserializer(schema.definitions.EnumOutput, {

});

registerEnumDeserializer(schema.definitions.NamedArgsSingleEnum, {

});

registerEnumDeserializer(schema.definitions.NamedArgsSingleEnumList, {

});

registerEnumDeserializer(schema.definitions.OptionalTest_CategoryType, {

});

registerEnumDeserializer(schema.definitions.OrderStatus, {

});

registerEnumDeserializer(schema.definitions.OverrideEnum, {

});

registerEnumDeserializer(schema.definitions.Tag, {

});

registerEnumDeserializer(schema.definitions.TestEnum, {
  "k1": "A",
  "k1: User is angry": "A",
  "k22": "B",
  "k22: User is happy": "B",
  "k11": "C",
  "k11: User is sad": "C",
  "k44": "D",
  "k44: User is confused": "D",
  "E: User is excited": "E",
  "User is excited": "E",
  "k5": "F",
  "k6": "G",
  "k6: User is bored\nWith a long description": "G"
});

registerObjectDeserializer(schema.definitions.Blah, {

});

registerObjectDeserializer(schema.definitions.ClassOptionalFields, {

});

registerObjectDeserializer(schema.definitions.ClassOptionalOutput, {

});

registerObjectDeserializer(schema.definitions.ClassOptionalOutput2, {

});

registerObjectDeserializer(schema.definitions.DynamicPropsClass, {

});

registerObjectDeserializer(schema.definitions.Email, {

});

registerObjectDeserializer(schema.definitions.Event, {

});

registerObjectDeserializer(schema.definitions.Message, {

});

registerObjectDeserializer(schema.definitions.ModifiedOutput, {
  "REASONING": "reasoning",
  "ANSWER": "answer"
});

registerObjectDeserializer(schema.definitions.NamedArgsSingleClass, {

});

registerObjectDeserializer(schema.definitions.OptionalClass, {

});

registerObjectDeserializer(schema.definitions.OptionalTest_Prop1, {

});

registerObjectDeserializer(schema.definitions.OptionalTest_ReturnType, {

});

registerObjectDeserializer(schema.definitions.OrderInfo, {

});

registerObjectDeserializer(schema.definitions.OverrideClass, {

});

registerObjectDeserializer(schema.definitions.RaysData, {

});

registerObjectDeserializer(schema.definitions.Resume, {

});

registerObjectDeserializer(schema.definitions.SearchParams, {

});

registerObjectDeserializer(schema.definitions.SomeClass2, {

});

registerObjectDeserializer(schema.definitions.TestClassAlias, {
  "key-dash": "key",
  "key21": "key2",
  "key with space": "key3",
  "key.with.punctuation/123": "key5"
});

registerObjectDeserializer(schema.definitions.TestClassWithEnum, {

});

registerObjectDeserializer(schema.definitions.TestOutputClass, {

});

registerObjectDeserializer(schema.definitions.UnionTest_ReturnType, {

});

registerObjectDeserializer(schema.definitions.WithReasoning, {

});


export { schema }

