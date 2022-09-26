export type FetchPizzasParams = Record<string, string>;

export type Pizza = {
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  id: string;
  price: number;
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  products: Pizza[];
  status: Status;
}

