// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { GPT35 } from '../client';
import { FnOutputStringList } from '../function';
import { schema } from '../json_schema';
import { LLMResponseStream } from '@boundaryml/baml-core';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


const prompt_template = `\
Return a list of strings:\
`;

const deserializer = new Deserializer<string[]>(schema, {
  $ref: '#/definitions/FnOutputStringList_output'
});

const v1 = async (
  arg: string
): Promise<string[]> => {
  
  const result = await GPT35.run_prompt_template(
    prompt_template,
    [],
    {
    }
  );

  return deserializer.coerce(result.generated);
};

const v1_stream = (
  arg: string
): LLMResponseStream<string[]> => {
  
  const stream = GPT35.run_prompt_template_stream(
    prompt_template,
    [],
    {
    }
  );

  return new LLMResponseStream<string[]>(
    stream,
    (partial: string) => {
      console.log(`>>> partial >>>\n${partial}'\n<<< partial <<<`)
      return null
    },
    (final: string) => deserializer.coerce(final),
  );
};

FnOutputStringList.registerImpl('v1', v1, v1_stream);


