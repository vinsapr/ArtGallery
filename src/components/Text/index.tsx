import * as React from 'react';
import {Text as TextNative} from 'react-native';

import {IText} from './index.type';
import styles from './styles';

const Text = ({
  adjustsFontSizeToFit = false,
  children,
  color,
  flex,
  flexWrap,
  textAlign = 'auto',
  variant = 'body',
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
  fontWeight,
  height,
  width,
  alignSelf,
  textDecorationLine,
  lineHeight,
  onPress,
}: IText): React.ReactElement => {
  const customStyle = {
    color,
    flex,
    flexWrap,
    textAlign,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    fontWeight,
    height,
    width,
    alignSelf,
    textDecorationLine,
    lineHeight,
  };

  return (
    <TextNative
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      onPress={onPress}
      style={[styles[variant], customStyle]}>
      {children}
    </TextNative>
  );
};

export default React.memo(Text);
