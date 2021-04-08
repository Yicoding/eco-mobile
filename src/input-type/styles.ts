import { createStyles } from '@wonder-ui/core';

const styles = createStyles({
  root: {
    '& .am-list-item': {
      // border: '1px solid #000',
      paddingLeft: 0,
      minHeight: '50px',
      '& .am-input-label': {
        color: '#333333',
        whiteSpace: 'nowrap',
        fontSize: '15px',
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right',
        marginRight: '11px',
      },
      '& .am-input-control': {
        border: '1px solid #000',
        '& input': {
          height: '100%',
          fontSize: '15px',
        },
      },
    },
  },
  input: {
    border: '1px solid red',
  },
});
export default styles;
