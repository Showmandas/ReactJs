// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
// import ProductList from './components/ProductList';
// import products from './components/ProductData';
// import UseStateArray from './UseState/UseStateArray';
// import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Header from './Card-Project/Header';
import Home from './Card-Project/Home';
import CreateForm from './Card-Project/CreateForm';
import Footer from './Card-Project/Footer';



function App() {

//   const [productList,setProducts]=useState(products);

//  const incrQuantity=(index)=>{
//     let newProducts=[...productList]
//     newProducts[index].quantity++
//     setProducts(newProducts);

//   }

  
//  const decrQuantity=(index)=>{
//   let newProducts=[...productList]
//   newProducts[index].quantity > 0 ? newProducts[index].quantity--:newProducts[index].quantity=0;
//   setProducts(newProducts);

// }

  return (
    <div className='container wrapper'>
    {/* <Navbar />
    <main className='container mt-5'>
    <ProductList products={products} incrQuantity={incrQuantity} decrQuantity={decrQuantity}/>
    </main>
     */}
     {/* <UseStateArray/> */}
     <Header/>
   <Routes>
    <Route path='/Home' element={<Home />}></Route>
    <Route path='/CreateForm' element={<CreateForm />}></Route>

   </Routes>
     <Footer/>
    </div>
  );
}

export default App;
