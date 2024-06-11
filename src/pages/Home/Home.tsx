import { Grid } from "@mui/material"
import { ProductItem } from "../../components/ProductItem"
import { IProduct } from "../../interfaces/IProduct"
import { useRecoilState, useRecoilValue } from "recoil"
import { cartsAtom, productsAtom } from "../../contexts/CartAtom"
import { ICart } from "../../interfaces/ICart"

const randomId = () => {
  return 'id' + (Math.random() * 1000) + 1;
}
export const Home = () => {
  const productsList = useRecoilValue(productsAtom)
  const [shoppingCart, setShoppingCart] = useRecoilState(cartsAtom)
  const addToCart = (id: string) => {
    const existingCart = shoppingCart.findIndex(p => p.productId === id)
    if (existingCart !== -1) {
      const newShoppingCarts = [...shoppingCart]
      newShoppingCarts[existingCart] = { ...newShoppingCarts[existingCart], quantity: newShoppingCarts[existingCart].quantity + 1 }
      setShoppingCart(newShoppingCarts)
    } else {
      const product = productsList.find(p => p.id === id)
      if (product) {
        const newCart: ICart = {
          id: randomId(),
          image: product.image,
          name: product.name,
          price: product.price,
          productId: product.id,
          quantity: 1,
        }
        setShoppingCart(prev => [...prev, newCart])
      }
    }
  }

  return (
    <Grid container spacing={2}>
      {productsList.map((product: IProduct, index) => ((
        <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
          <ProductItem {...product} addToCart={addToCart} />
        </Grid>
      )))}
    </Grid>
  )
}
