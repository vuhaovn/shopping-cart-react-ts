import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { Navbar } from './components/Navbar';
import { Box, Container } from '@mui/material';
import { Product } from './pages/Product/Product';
import { AddProduct } from './pages/Product/components/AddProduct';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{
          paddingTop: 2
        }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin/product' element={<Product />} />
            <Route path='/admin/product/add' element={<AddProduct />} />
          </Routes>
        </Box>
      </Container>
    </>
  )
}

export default App
