// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { GPT4Turbo } from '../client';
import { DescribeImage4 } from '../function';
import { schema } from '../json_schema';
import { InternalClassWithImage } from '../types_internal';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


// Impl: default_config
// Client: GPT4Turbo
// An implementation for DescribeImage4


const prompt_template = `{{ _.chat(role="system")}}

Describe this in 5 words:
{{ classWithImage.myImage }}

Tell me also what's happening here in one sentence and relate it to the word {{ classWithImage.param2 }}:
{{ img2 }}`;
const output_format = `string`;

const template_macros = [
]

const deserializer = new Deserializer<string>(schema, {
  $ref: '#/definitions/DescribeImage4_output'
});

DescribeImage4.registerImpl('default_config', async (
  args: {
    classWithImage: ClassWithImage, img2: Image
  }
): Promise<string> => {
    const result = await GPT4Turbo.run_jinja_template(
      prompt_template,
      args,
      output_format,
      template_macros,
    );

    return deserializer.coerce(result.generated);
  }
);

