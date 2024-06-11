import { ICart } from "./interfaces/ICart";
import { IProduct } from "./interfaces/IProduct";

export const products: IProduct[] = [
  {
    id: '1',
    name: "Iphone 13 Pro",
    image: "/imgs/iphone13pro.jpg",
    price: 15000000,
  },
  {
    id: '2',
    name: "HTC Butterfly​",
    image: "/imgs/htc.jpg",
    price: 12000000,
  },
  {
    id: '3',
    name: "Nokia",
    image: "/imgs/nokia.jpg",
    price: 3500000,
  },
  {
    id: '4',
    name: "Xiaomi",
    image: "/imgs/xiaomi.jpg",
    price: 5500000,
  },
]

export const carts: ICart[] = [
  {
    id: '1',
    name: "Iphone 13 Pro",
    image: "/imgs/iphone13pro.jpg",
    price: 15000000,
    productId: '1',
    quantity: 1,
  },
  {
    id: '2',
    name: "Xiaomi",
    image: "/imgs/xiaomi.jpg",
    price: 5500000,
    productId: '4',
    quantity: 2,
  }
]