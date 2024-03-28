// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { GPT35 } from '../client';
import { FnClassOptionalOutput } from '../function';
import { schema } from '../json_schema';
import { LLMResponseStream } from '@boundaryml/baml-core';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


const prompt_template = `\
Return a json blob for the following input:
{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}

Answer in JSON using this schema:
{
  "prop1": string,
  "prop2": string
} | null

JSON:\
`;

const deserializer = new Deserializer<ClassOptionalOutput | null>(schema, {
  $ref: '#/definitions/FnClassOptionalOutput_output'
});

const v1 = async (
  arg: string
): Promise<ClassOptionalOutput | null> => {
  
  const result = await GPT35.run_prompt_template(
    prompt_template,
    [
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}",
    ],
    {
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}": arg,
    }
  );

  return deserializer.coerce(result.generated);
};

const v1_stream = (
  arg: string
): LLMResponseStream<ClassOptionalOutput | null> => {
  
  const stream = GPT35.run_prompt_template_stream(
    prompt_template,
    [
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}",
    ],
    {
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}": arg,
    }
  );

  return new LLMResponseStream<ClassOptionalOutput | null>(
    stream,
    (partial: string) => {
      console.log(`>>> partial >>>\n${partial}'\n<<< partial <<<`)
      return null
    },
    (final: string) => deserializer.coerce(final),
  );
};

FnClassOptionalOutput.registerImpl('v1', v1, v1_stream);


