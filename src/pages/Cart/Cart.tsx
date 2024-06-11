import { Box, Button, CardMedia, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { formatCurrency } from "../../utils/formatCurrency"
import { ICart } from "../../interfaces/ICart";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRecoilState } from "recoil";
import { cartsAtom } from "../../contexts/CartAtom";
import { Link as RouterLink } from 'react-router-dom';

export const Cart = () => {
  const [shoppingCart, setShoppingCart] = useRecoilState(cartsAtom)
  const total = shoppingCart.reduce((a: number, c: ICart) => a + (c.price * c.quantity), 0)
  const handleIncrement = (index: number) => {
    const newShoppingCart = [...shoppingCart]
    newShoppingCart[index] = { ...newShoppingCart[index], quantity: newShoppingCart[index].quantity + 1 }
    setShoppingCart(newShoppingCart)
  }

  const handleDecrement = (index: number) => {
    const newShoppingCart = [...shoppingCart]
    if (newShoppingCart[index].quantity > 1) {
      newShoppingCart[index] = { ...newShoppingCart[index], quantity: newShoppingCart[index].quantity - 1 }
      setShoppingCart(newShoppingCart)
    }
  }

  const handleDelete = (id: string) => {
    const newShoppingCart = [...shoppingCart]
    const newList = newShoppingCart.filter(cart => cart.id !== id)
    setShoppingCart(newList)
  }

  const handleChange = (value: string, index: number) => {
    const newShoppingCart = [...shoppingCart]
    newShoppingCart[index] = { ...newShoppingCart[index], quantity: parseInt(value) }
    setShoppingCart(newShoppingCart)
  }

  return (
    <Grid container spacing={2}>
      <Box sx={{ py: 2, width: '100%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCart.length > 0 ? shoppingCart.map((cart, index) => (
                <TableRow
                  key={cart.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <CardMedia
                      sx={{ width: 100, height: 100, mr: 2 }}
                      image={cart.image}
                      title={cart.name}
                    />
                  </TableCell>
                  <TableCell align="center">{cart.name}</TableCell>
                  <TableCell align="center" sx={{ width: '170px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: 1 }}>
                      <Button onClick={() => handleDecrement(index)} variant="outlined" sx={{ padding: 0, minWidth: '30px' }}>-</Button>
                      <TextField sx={{ minWidth: '50px' }} id={`quantityInput${index}`} type="number" variant="standard" value={cart.quantity} onChange={(e) => handleChange(e.target.value, index)} />
                      <Button onClick={() => handleIncrement(index)} variant="outlined" sx={{ padding: 0, minWidth: '30px' }}>+</Button>
                    </Box>
                  </TableCell>
                  <TableCell align="center">{formatCurrency(cart.price)}</TableCell>
                  <TableCell align="center">{formatCurrency(cart.quantity * cart.price)}</TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="delete" size="medium" onClick={() => handleDelete(cart.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Box sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column'
                    }}>
                      <Typography>There are no items in this cart</Typography>
                      <Button variant="contained" color="primary"
                        component={RouterLink}
                        to='/'
                      >Continue shopping</Button>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* {shoppingCart.map((cart, index) => (
          <Box key={index} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: 2, mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                sx={{ width: 100, height: 100, mr: 2 }}
                image={cart.image}
                title={cart.name}
              />
              <Typography variant="body1">{cart.name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: 2 }}>
              <Button onClick={() => handleDecrement(index)} variant="outlined" sx={{ width: '30px' }}>-</Button>
              <TextField id={`quantityInput${index}`} type="number" variant="standard" value={cart.quantity} />
              <Button onClick={() => handleIncrement(index)} variant="outlined" sx={{ width: '30px' }}>+</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1">{formatCurrency(cart.price)}</Typography>
            </Box>
            <Box>
              Total: {formatCurrency(cart.quantity * cart.price)}
            </Box>
          </Box>
        ))} */}
      </Box>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <Typography variant="h3">Total: {formatCurrency(total)}</Typography>
      </Box>
    </Grid>
  )
}
