// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { GPT35 } from '../client';
import { TestFnNamedArgsSingleFloat } from '../function';
import { schema } from '../json_schema';
import { LLMResponseStream } from '@boundaryml/baml-core';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


const prompt_template = `\
Return this value back to me: {//BAML_CLIENT_REPLACE_ME_MAGIC_input.myFloat//}\
`;

const deserializer = new Deserializer<string>(schema, {
  $ref: '#/definitions/TestFnNamedArgsSingleFloat_output'
});

const v1 = async (
  args: {
    myFloat: number
  }
): Promise<string> => {
  const myFloat = args.myFloat;
  
  const result = await GPT35.run_prompt_template(
    prompt_template,
    [
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input.myFloat//}",
    ],
    {
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input.myFloat//}": myFloat,
    }
  );

  return deserializer.coerce(result.generated);
};

const v1_stream = (
  args: {
    myFloat: number
  }
): LLMResponseStream<string> => {
  const myFloat = args.myFloat;
  
  const stream = GPT35.run_prompt_template_stream(
    prompt_template,
    [
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input.myFloat//}",
    ],
    {
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input.myFloat//}": myFloat,
    }
  );

  return new LLMResponseStream<string>(
    stream,
    (partial: string) => {
      console.log(`>>> partial >>>\n${partial}'\n<<< partial <<<`)
      return null
    },
    (final: string) => deserializer.coerce(final),
  );
};

TestFnNamedArgsSingleFloat.registerImpl('v1', v1, v1_stream);


