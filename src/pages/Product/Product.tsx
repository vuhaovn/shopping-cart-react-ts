import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { products } from '../../products';
import { formatCurrency } from '../../utils/formatCurrency';
import { Box, Button, CardMedia } from '@mui/material';
import { useState } from 'react';
import ConfirmDiaLog from '../../components/Dialog';
import { Link as RouterLink } from 'react-router-dom';

export const Product = () => {
  const [productList, setProductList] = useState(products);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleOpen = (productName: string, id: string) => {
    setId(id);
    setMessage(`Are you sure want to delete ${productName}`);
    setOpen(true);
  }

  const handleClose = () => {
    setId('');
    setOpen(false);
  }

  const handleConfirm = (id: string) => {
    console.log('id', id);
    setProductList(prev => prev.filter(p => p.id !== id));
    setOpen(false);
  }
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button component={RouterLink} to='/admin/product/add' variant='contained' color='primary'>Add produc</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Control</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <CardMedia
                    sx={{ width: 100, height: 100 }}
                    image={row.image}
                    title={row.name}
                  />
                </TableCell>
                <TableCell>{formatCurrency(row.price)}</TableCell>
                <TableCell>
                  <Button variant='contained' color='info'>Edit</Button>
                  <Button variant='contained' color='warning' sx={{ marginLeft: 1 }} onClick={() => handleOpen(row.name, row.id)}>Delete</Button>
                  <ConfirmDiaLog
                    id={id}
                    open={open}
                    handleClose={handleClose}
                    handleConfirm={handleConfirm}
                    message={message}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
