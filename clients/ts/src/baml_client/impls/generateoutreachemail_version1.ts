// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck

import { Deserializer } from '../../baml_lib/deserializer/deserializer';
import { GPT4 } from '../client';
import { GenerateOutreachEmail } from '../function';
import { schema } from '../json_schema';


const prompt_template = `\
    You’re an expert assistant that helps homeowners find the best home service providers. You will create a SMS text message based off the homeowner’s request asking vendors to see if they can help.
    You will:

Copy as much as possible from the original message.
Ask them if they can help with the task
Add additional details from Project Context, only if necessary.
Never mention homeowner’s name.
Do not exceed 150 words.
Split it into 2 messages.

    Customer Request: {//BAML_CLIENT_REPLACE_ME_MAGIC_input//}

    Output json is int[]

    Response:\
`;

const deserializer = new Deserializer<number[]>(schema, {
  $ref: '#/definitions/GenerateOutreachEmail_output'
});

GenerateOutreachEmail.registerImpl('version1', {
  name: 'version1',
  run: async (
arg: string
  ): Promise<number[]> => {
  
    const result = await GPT4.run_prompt_template(
      prompt_template,
      {
        "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}": arg,
      }
    );

    return deserializer.coerce(result);
  }
});