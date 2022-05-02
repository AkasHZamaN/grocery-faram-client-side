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


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

        <Route path='/inventoryItem/:id' element={
        <PrivateRoute>
          <ItemDetails></ItemDetails>
        </PrivateRoute>}>
        </Route>

        <Route path='/myProduct' element={<MyProduct></MyProduct>}></Route>
        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/myInventory' element={<MyInventory></MyInventory>}></Route>

        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
