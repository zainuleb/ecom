import './App.css';
import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from './redux/actions/index.js'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(allActions.productsActions.fetchAllProducts())
    // eslint-disable-next-line
  }, [])

  const {products} = useSelector(state=>state.products);

  console.log(products)

  return (
    <div className="App">
   {products?
        <ul>{
        products.map((item)=>(
          <li key={item.id}>{item.title}</li>
        ))
          }</ul>:<div>Loading</div>}
    </div>
  );
}

export default App;
