import {StyleSheet, ViewStyle} from 'react-native';

import * as appTheme from '../../assets/custom-theme.json';
import {ButtonVariant} from './index.type';

interface IStyles {
  container: ViewStyle;
  varianRed: ViewStyle;
  variantWhite: ViewStyle;
  variantBlue: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: appTheme['color-black'],
    padding: 8,
    borderRadius: 4,
    minWidth: 80,
    alignItems: 'center',
  },
  variantBlue: {
    backgroundColor: appTheme['color-blue'],
  },
  varianRed: {
    backgroundColor: appTheme['color-red'],
  },
  variantWhite: {
    backgroundColor: appTheme['color-white'],
    borderWidth: 0.2,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
});

export const buttonVariantStyles = {
  [ButtonVariant.red]: {
    buttonStyle: styles.varianRed,
    textColor: appTheme['color-white'],
  },
  [ButtonVariant.blue]: {
    buttonStyle: styles.variantBlue,
    textColor: appTheme['color-white'],
  },
  [ButtonVariant.white]: {
    buttonStyle: styles.variantWhite,
    textColor: appTheme['color-black'],
  },
};

export default styles;
