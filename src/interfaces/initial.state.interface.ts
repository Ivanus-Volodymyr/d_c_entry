import { IDiscount } from './discount.interface';

export interface IInitialState {
  discounts: IDiscount[];
  loading: boolean;
  error: null | string;
}
