
import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/Products/Products';

function App() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])
  console.log(products)
  return (
    <div >
      <div className="headings">   <h1>Headset store</h1></div>
      <div className="main-display">
        <div className='products'>
          {
            products.map(product => <Products product={product}></Products>)
          }
        </div>
        <div className="selected">

        </div>
      </div>



    </div>
  );
}

export default App;
