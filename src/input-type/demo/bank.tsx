import React from 'react';
import { InputType } from 'eco-mobile';
import less from './styles.less';
console.log(
  '%c 🍊 less: ',
  'font-size:20px;background-color: #FFDD4D;color:#fff;',
  less,
);

function Bank() {
  return (
    <div>
      <InputType type="bankCard" label={'银行卡'} classes={less} />
    </div>
  );
}

export default Bank;
