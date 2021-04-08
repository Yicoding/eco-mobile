import React, { useState, useEffect } from 'react';
import { InputType } from 'eco-mobile';
import styles from './styles';
import less from './styles.less';

function Base() {
  const s = styles();
  const [value, setValue] = useState<string | number>(12345);
  const onChange = (val: string | any) => {
    console.log(
      '%c 🍑 val: ',
      'font-size:20px;background-color: #7F2B82;color:#fff;',
      val,
    );
    setValue(val);
  };
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div>
      <InputType
        type="mobile"
        classes={less}
        label={'手机号'}
        onChange={onChange}
        value={value}
      />
      <span>{value}</span>
    </div>
  );
}

export default Base;
