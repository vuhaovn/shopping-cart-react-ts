import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { IProduct } from "../interfaces/IProduct"
import { formatCurrency } from "../utils/formatCurrency"
import { CartFunction } from "../interfaces/ICart"
import { cartsAtom } from "../contexts/CartAtom"
import { useRecoilValue } from "recoil"
export const ProductItem = ({ id, name, image, price, addToCart }: IProduct & CartFunction) => {
  const shoppingCart = useRecoilValue(cartsAtom)
  return (
    <Card sx={{ backgroundColor: 'white' }}>
      <CardMedia
        sx={{ height: { xs: '200px', md: '300px' }, backgroundSize: 'contain' }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h4">{formatCurrency(price)}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => addToCart(id)}>Add to card</Button>
        {shoppingCart.map((cart, index) => cart.productId === id ? (
          <span key={index}>({cart.quantity} in cart)</span>
        ) : <span key={index}></span>)}
      </CardActions>
    </Card>
  )
}
