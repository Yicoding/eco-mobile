import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/core';
import styles from './styles';
interface ValidRangeProps {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  value?: Array<string | undefined>;
  onChange?: (value: Array<string | undefined>, type: string) => void;
  labels?: string[];
  titles?: string[];
  placeholders?: string[];
  forerverText?: string;
  foreverDate?: string;
  minDate?: Date;
  maxDate?: Date;
  cache?: boolean;
}
declare const _default: React.ComponentType<Omit<ValidRangeProps, 'classes'> &
  Partial<
    import('@wonder-ui/core').WithStylesProps<
      import('@wonder-ui/core').Styles<
        import('@wonder-ui/core').DefaultTheme,
        {},
        | 'root'
        | 'itemEnd'
        | 'datePicker'
        | 'dateValue'
        | 'forerverBox'
        | 'iconCheck'
        | 'iconChecked'
      >
    >
  > & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
  }>;
export default _default;
