
import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import Selproducts from './components/selProducts/Selproducts';

function App() {
  const [products, setproducts] = useState([]);
  const [selectedProduct, setselectedProduct] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])

  const addToCartButton = (id) => {
    console.log(id)
    const newProduct = [...selectedProduct, id]
    setselectedProduct(newProduct)
    console.log(selectedProduct)

  }

  return (
    <div className='main'>
      <div className="headings">   <h1>Headset store</h1></div>
      <div className="main-display">
        <div className='products'>
          {
            products.map(product => <Products product={product} key={product.id} addToCartButton={addToCartButton}></Products>)
          }
        </div>
        <div className="selected">
          {
            selectedProduct.map(selpro => <Selproducts product={selpro} products={selectedProduct}></Selproducts>)
          }
        </div>
      </div>



    </div>
  );
}

export default App;
