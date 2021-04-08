import React from 'react';
import Form, { Field } from 'rc-field-form';
import { Button } from 'antd-mobile';
import { InputType } from 'eco-mobile';
import less from './form.less';

export default () => {
  const [form] = Form.useForm();
  const submit = () => {
    const values = form.getFieldsValue();
    console.log(
      '%c 🥧 values: ',
      'font-size:20px;background-color: #FFDD4D;color:#fff;',
      values,
    );
  };
  return (
    <React.Fragment>
      <Form form={form}>
        <Field name="number">
          <InputType
            label="基本数字输入框"
            placeholder="请输入"
            classes={less}
          />
        </Field>
        <Field name="mobile">
          <InputType
            type="mobile"
            label="手机号"
            placeholder="请输入手机号"
            classes={less}
          />
        </Field>
        <Field name="bankCard">
          <InputType
            type="bankCard"
            label="银行卡"
            placeholder="请输入银行卡号"
            classes={less}
          />
        </Field>
        <Field name="idCardNumber">
          <InputType
            type="idCardNumber"
            label="身份证"
            placeholder="请输入身份证号"
            classes={less}
          />
        </Field>
      </Form>
      <Button onClick={submit} size="small" type="primary" inline>
        提交
      </Button>
    </React.Fragment>
  );
};
