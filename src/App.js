
import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/Products/Products';

import Selected from './components/Selected/Selected';
import Questions from './components/Questions/Questions';

function App() {
  const [products, setproducts] = useState([]);
  const [selectedProduct, setselectedProduct] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])
  // add Cart button 
  const addToCartButton = (id) => {

    const newProduct = [...selectedProduct, id]
    setselectedProduct(newProduct)
  }

  // random button 
  const randomButton = () => {
    // Math.floor(Math.random() * (selectedProduct.length - 1))
    var random = Math.floor(Math.random() * selectedProduct.length);
    const onlyProduct = selectedProduct[(random)]
    setselectedProduct([onlyProduct])

  }
  //chose again
  const chooseAgain = () => {
    setselectedProduct([])
  }
  return (
    <div className='main'>
      {/* heading  */}
      <div className="headings">   <h1>Headset store</h1></div>

      {/* products  */}
      <div className="main-display">
        <div className='products'>
          {
            products.map(product => <Products product={product} key={product.id} addToCartButton={addToCartButton}></Products>)
          }
        </div>

        {/* selected items  */}
        <div className="selected">
          <Selected selectedProduct={selectedProduct} randomButton={randomButton} chooseAgain={chooseAgain}></Selected>

          {/* answers */}


        </div>
      </div>

      <Questions></Questions>

    </div>
  );
}

export default App;
