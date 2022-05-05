import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Pages/Inventory/Inventory';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import ItemDetails from './Pages/Inventory/ItemDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyInventory from './Pages/MyInventory/MyInventory';
import NotFound from './Pages/NotFound/NotFound';
import MyProduct from './Pages/MyProduct/MyProduct';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Footer from './Pages/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/inventoryItem/:id' element={
        <PrivateRoute>
          <ItemDetails></ItemDetails>
        </PrivateRoute>}>
        </Route>
        <Route path='/checkout/:id' element={
        <PrivateRoute>
          <Checkout></Checkout>
        </PrivateRoute>}>
        </Route>

        <Route path='/myProduct' element={<PrivateRoute>
          <MyProduct></MyProduct>
        </PrivateRoute>}></Route>

        <Route path='/addProduct' element={<PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>}></Route>

        <Route path='/myInventory' element={<PrivateRoute>
          <MyInventory></MyInventory>
        </PrivateRoute>}></Route>

        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
