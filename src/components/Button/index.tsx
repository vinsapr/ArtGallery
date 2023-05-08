import * as React from 'react';
import {IButton, ButtonVariant} from './index.type';
import styles, {buttonVariantStyles} from './styles';
import Text from '../Text';
import {TouchableOpacity, ViewStyle} from 'react-native';

const Button = ({
  onPress,
  variant = ButtonVariant.blue,
  margin,
  label = '',
  marginBottom,
  marginTop,
  marginVertical,
  padding,
  marginHorizontal,
}: IButton): React.ReactElement => {
  const customStyle: ViewStyle = {
    margin,
    marginBottom,
    marginHorizontal,
    marginTop,
    marginVertical,
    padding,
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        customStyle,
        buttonVariantStyles[variant]?.buttonStyle ?? [],
      ]}
      onPress={onPress}>
      <Text variant="body" color={buttonVariantStyles?.[variant]?.textColor}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
