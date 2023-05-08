import {StyleSheet, ViewStyle} from 'react-native';

import * as appTheme from '../../assets/custom-theme.json';

interface IStyles {
  card: ViewStyle;
  cardImage: ViewStyle;
  buttonCard: ViewStyle;
  buttonCardRight: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  card: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: appTheme['color-white'],
    borderWidth: 0.2,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 16,
  },
  cardImage: {
    width: 'auto',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  buttonCard: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  buttonCardRight: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
});

export default styles;
