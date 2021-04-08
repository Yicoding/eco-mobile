import React, { useState } from 'react';
import { InputType } from 'eco-mobile';
import styles from './styles';
import less from './styles.less';

function Base() {
  const s = styles();
  let [value, setValue] = useState();
  const onChange = (val: any) => {
    console.log(
      '%c 🍣 val: ',
      'font-size:20px;background-color: #EA7E5C;color:#fff;',
      val,
    );
    setValue(val);
  };
  return (
    <div>
      <InputType
        classes={less}
        label={'基本用法'}
        placeholder="请输入"
        onChange={onChange}
      />
      <h2>{value}</h2>
    </div>
  );
}

export default Base;
