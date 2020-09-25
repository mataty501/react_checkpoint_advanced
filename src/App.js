/*
Create a project using create-react-app.
Create inside App.js an array of object named products

Each object contains a price, and name, and category which can be Electronics and Clothes.
Create a component ProductTable, pass products array as props.
ProductTable returns a table that has three columns Name, category, and price.


Map your array of products inside the table. <===
Use inline props to style your app as you wish.
Use proptypes to define your props types
*/



import React from 'react';
import ProductTable from './components/ProductTable'
import './App.css';


function App() {

  const products = [{
    name : 'product1',
    price: 100,
    category: 'electronics'
  },
  {
    name : 'product2',
    price: 25,
    category: 'clothes'
  },
  {
    name : 'product3',
    price: 52,
    category: 'clothes'
  }
]

  return (
    <div>

        <table style={{ width: "100%" , textAlign: "center"}} >
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>
        </tr>
          {products.map((element) => <ProductTable data={element}/>)} {/* <=== line 52 forEach not iterable*/}
          
        </tbody>
    </table>
        
  </div>   
  );
}

export default App;
