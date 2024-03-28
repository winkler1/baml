// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { GPT35 } from '../client';
import { FnEnumListOutput } from '../function';
import { schema } from '../json_schema';
import { LLMResponseStream } from '@boundaryml/baml-core';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


const prompt_template = `\
Print out two of these values randomly selected from the list below in a json array.

VALUE_ENUM
---
ONE
TWO
THREE

Answer:\
`;

const deserializer = new Deserializer<EnumOutput[]>(schema, {
  $ref: '#/definitions/FnEnumListOutput_output'
});

const v1 = async (
  arg: string
): Promise<EnumOutput[]> => {
  
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
): LLMResponseStream<EnumOutput[]> => {
  
  const stream = GPT35.run_prompt_template_stream(
    prompt_template,
    [],
    {
    }
  );

  return new LLMResponseStream<EnumOutput[]>(
    stream,
    (partial: string) => {
      console.log(`>>> partial >>>\n${partial}'\n<<< partial <<<`)
      return null
    },
    (final: string) => deserializer.coerce(final),
  );
};

FnEnumListOutput.registerImpl('v1', v1, v1_stream);


