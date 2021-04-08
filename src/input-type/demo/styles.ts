import { createUseStyles } from '@wonder-ui/core';

const styles = createUseStyles({
  root: {
    '& .am-list-item': {
      paddingLeft: 0,
      minHeight: '50px',
      border: 0,
      '& .am-input-label': {
        color: '#333333',
        fontSize: '15px',
        marginRight: 0,
      },
      '& .am-input-control': {
        '& input': {
          fontSize: '15px',
        },
      },
    },
  },
});

export default styles;
