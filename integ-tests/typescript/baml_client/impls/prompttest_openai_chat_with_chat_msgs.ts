// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { GPT35 } from '../client';
import { PromptTest } from '../function';
import { schema } from '../json_schema';
import { LLMResponseStream } from '@boundaryml/baml-core';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


const prompt_template = [
  {
    role: "system",
    content: `You are an assistant that always responds in a very excited way with emojis and also outputs this word 4 times after giving a response: {//BAML_CLIENT_REPLACE_ME_MAGIC_input//}`
  },
  {
    role: "user",
    content: `Tell me a haiku about {//BAML_CLIENT_REPLACE_ME_MAGIC_input//}`
  }
];


const deserializer = new Deserializer<string>(schema, {
  $ref: '#/definitions/PromptTest_output'
});

const openai_chat_with_chat_msgs = async (
  arg: string
): Promise<string> => {
  
  const result = await GPT35.run_chat_template(
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

const openai_chat_with_chat_msgs_stream = (
  arg: string
): LLMResponseStream<string> => {
  
  const stream = GPT35.run_chat_template_stream(
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

PromptTest.registerImpl('openai_chat_with_chat_msgs', openai_chat_with_chat_msgs, openai_chat_with_chat_msgs_stream);


