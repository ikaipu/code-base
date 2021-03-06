import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { Props } from '.';

export default {
  title: 'pages/SignUp',
  component: Component,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<Props> = (args) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  values: {},
  touched: {},
  errors: {},
};

export const FormError = Template.bind({});

FormError.args = {
  ...Primary.args,
  errorMessage: 'ネットワークエラーが発生しました。',
};

export const ValidationError = Template.bind({});

ValidationError.args = {
  ...Primary.args,
  errors: {
    email: '無効なメールアドレスです',
    password: 'パスワードは6文字以上で入力して下さい',
    password2: '入力は必須です',
  },
  touched: {
    email: true,
    password: true,
    password2: true,
  },
  values: {
    email: 'test',
    password: 'pass',
  },
};
