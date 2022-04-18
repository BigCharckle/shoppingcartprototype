//import * as faker from 'faker';
//faker.seed(99);
/*const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));     */
 const countries = [{ name:'Australia', currency: 'AUD', rate: '1.00'},
                    { name:'United States', currency: 'USD', rate: '0.742'},
                    { name:'Japan', currency: 'JPY', rate: '21.00'},
                    ];  


const defaultCountry =  countries.find((c)=>c.currency  === 'AUD');       
const API_PRODUCTS = "http://localhost:18959/product";
const API_LOCAL_COUNTRIES = "http://localhost:18959/country";
const API_LOCAL_SHIPPINGPRICE = "http://localhost:18959/shoppingcart/shippingprice";
const API_LOCAL_CHECKOUT = "http://localhost:18959/shoppingcart/checkout";
//const EXTERMALAPI_FAKERAPI = "https://fakerapi.it/api/v1/products?_quantity=20&_price_max=100&_seed=88";
//const EXTERMALAPI_DUMMYJSON = "https://dummyjson.com/products";

       
const Apisource = { countries: countries, defaultCountry: defaultCountry, 
  API_PRODUCTS, API_LOCAL_COUNTRIES,API_LOCAL_SHIPPINGPRICE,API_LOCAL_CHECKOUT 
};


export default Apisource;