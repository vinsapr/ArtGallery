interface IDataDummy {
  id: number;
  name: string;
  image: string;
}

export interface ICard {
  onPressLike: (...args: any[]) => void;
  onPressDislike: (...args: any[]) => void;
  totalLike?: number;
  data: IDataDummy;
}
