enum ETextAlign {
  auto,
  left,
  right,
  center,
  justify,
}

enum ETextVariant {
  headline,
  body,
}

type TextAlign = keyof typeof ETextAlign;
type TextVariant = keyof typeof ETextVariant;
export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '400'
  | '500'
  | '600'
  | '700';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type AlignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
type TextDecorationLine =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'underline line-through';

export interface IText {
  className?: string;
  adjustsFontSizeToFit?: boolean;
  children?: string | React.ReactElement[] | React.ReactElement;
  color?: string;
  flex?: number;
  flexWrap?: FlexWrap;
  textAlign?: TextAlign;
  variant?: TextVariant;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  fontWeight?: FontWeight;
  height?: number;
  lineHeight?: number;
  width?: number | string;
  alignSelf?: AlignSelf;
  textDecorationLine?: TextDecorationLine;
  onPress?: () => void;
}
