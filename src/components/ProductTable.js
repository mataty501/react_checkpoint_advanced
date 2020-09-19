import React from 'react'

const ProductTable = (props) => {

  return (
      
<div>

    <table style={{ width: "100%" , textAlign: "center"}} >
  <tbody>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Type</th>
    </tr>

    <tr>
      <td>{props.data[0].name}</td>
      <td>{props.data[0].price}</td>
      <td>{props.data[0].category}</td>
    </tr>
    
  </tbody>
</table>
    
</div>   
    
    
    )
}

export default ProductTable;