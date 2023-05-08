export enum ButtonVariant {
  red = 'red',
  white = 'white',
  blue = 'blue',
}

export interface IButton {
  onPress: (...args: any[]) => void;
  variant?: ButtonVariant;
  label?: string;
  className?: string;
  margin?: number;
  marginBottom?: number;
  marginTop?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  padding?: number;
}
