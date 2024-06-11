import { IProduct } from "./IProduct";

export interface ICart extends IProduct {
  id: string;
  quantity: number;
  productId: string;
}

export interface CartFunction {
  addToCart: (id: string) => void;
}