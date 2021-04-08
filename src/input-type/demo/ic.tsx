import React from 'react';
import { InputType } from 'eco-mobile';
import less from './styles.less';
console.log(
  '%c 🍊 less: ',
  'font-size:20px;background-color: #FFDD4D;color:#fff;',
  less,
);

function Ic() {
  return (
    <div>
      <InputType type="idCardNumber" classes={less} label={'身份证号'} />
    </div>
  );
}

export default Ic;
