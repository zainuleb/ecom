import axios from 'axios';

export class productApi{
    async getAllProducts(){
        let result = await axios.get(`https://fakestoreapi.com/products`);
        if (result && result.data) {
            return result.data;
          }
    }
}