import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router'

const Category = () => {
    const { category } = useParams();
    console.log(category);

    const [products, setProducts] = useState([]);
    
    const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

    return (
        <div>
        {products?<ul>{products.map((item)=>(
            <li key={item.id}><h3>{item.title}</h3>
            <img alt={item.title} src={item.image}/></li>
        ))}</ul>:<div>Loading</div>}
        </div>
    )
}

export default Category
