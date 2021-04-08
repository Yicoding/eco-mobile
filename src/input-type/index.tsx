import React, { useState, useEffect, ReactNode } from 'react';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/core';
import { InputItem } from 'antd-mobile';

import styles from './styles';

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  type?: string | undefined;
  label?: string | ReactNode;
  isLabel?: boolean;
  value?: any;
  onChange?: (value: any) => void;
}

function InputType(props: Props) {
  const {
    classes,
    type = 'number',
    label,
    onChange,
    value,
    isLabel = true,
    ...res
  } = props;
  const [val, setValue] = useState<any>(value);

  const onChangeValue = (val: any) => {
    if (type === 'mobile') {
      const formateValue = val.replace(/\D/g, '').substring(0, 11);
      setValue(formateValue);
    }
    if (type === 'bankCard') {
      const formateValue = val
        .replace(/\D/g, '')
        .replace(/(....)(?=.)/g, '$1 ')
        .substring(0, 19);
      setValue(formateValue);
    }
    if (type === 'idCardNumber') {
      const formateValue = val.replace(/\D(\d|X)/g, '').substring(0, 18);
      setValue(formateValue);
    }
    if (type === 'number') {
      const formateValue = val.replace(/\D/g, '');
      setValue(formateValue);
    }
  };
  useEffect(() => {
    if (onChange) {
      onChange(val);
    }
    return () => {};
  }, [val]);
  return (
    <div className={props.classes?.root}>
      <InputItem onChange={onChangeValue} value={val || value} {...res}>
        {label} <span>{isLabel ? '：' : ''}</span>
      </InputItem>
    </div>
  );
}

export default withStyles(styles)(InputType);
