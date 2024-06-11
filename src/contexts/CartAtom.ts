import { atom } from "recoil";
import { ICart } from "../interfaces/ICart";
import { carts, products } from "../products";
import { IProduct } from "../interfaces/IProduct";

export const cartsAtom = atom<ICart[]>({
  key: 'shopping-cart',
  default: carts,
})

export const productsAtom = atom<IProduct[]>({
  key: 'products',
  default: products,
})