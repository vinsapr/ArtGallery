import {Platform, StyleSheet, TextStyle} from 'react-native';

import * as appTheme from '../../assets/custom-theme.json';

interface IStyles {
  headline: TextStyle;
  body: TextStyle;
}

interface IDefaultStyles {
  body: TextStyle;
  headline: TextStyle;
}

export const defaultStyles = StyleSheet.create<IDefaultStyles>({
  body: {
    textAlignVertical: 'center',
    color: appTheme['color-black'],
  },
  headline: {
    textAlignVertical: 'center',
    fontWeight: Platform.OS === 'ios' ? '500' : '100',
    textTransform: 'uppercase',
    color: appTheme['color-black'],
  },
});

const styles = StyleSheet.create<IStyles>({
  headline: {
    ...defaultStyles.headline,
    fontSize: 28,
    lineHeight: 48,
  },
  body: {
    ...defaultStyles.body,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.24,
  },
});
export default styles;
