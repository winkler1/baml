// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { Lottery_ComplexSyntax } from '../client';
import { PromptTest } from '../function';
import { schema } from '../json_schema';
import { LLMResponseStream } from '@boundaryml/baml-core';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


const prompt_template = `\
Tell me about your maker, then give me a haiku about {//BAML_CLIENT_REPLACE_ME_MAGIC_input//}\
`;

const deserializer = new Deserializer<string>(schema, {
  $ref: '#/definitions/PromptTest_output'
});

const bird_chat = async (
  arg: string
): Promise<string> => {
  
  const result = await Lottery_ComplexSyntax.run_prompt_template(
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

const bird_chat_stream = (
  arg: string
): LLMResponseStream<string> => {
  
  const stream = Lottery_ComplexSyntax.run_prompt_template_stream(
    prompt_template,
    [
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}",
    ],
    {
      "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}": arg,
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

PromptTest.registerImpl('bird_chat', bird_chat, bird_chat_stream);


