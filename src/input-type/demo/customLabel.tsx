import React, { useState } from 'react';
import { InputType } from 'eco-mobile';
import styles from './styles';
import less from './styles.less';

function CustomLabel() {
  const s = styles();
  let [value, setValue] = useState();
  const onChange = (val: any) => {
    setValue(val);
  };
  const domLabel = () => (
    <div
      style={{
        backgroundImage:
          'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
        backgroundSize: 'cover',
        height: '22px',
        width: '22px',
      }}
    />
  );
  return (
    <div>
      <InputType
        classes={less}
        label={domLabel()}
        placeholder="请输入"
        onChange={onChange}
      />
      <h2>{value}</h2>
    </div>
  );
}

export default CustomLabel;
