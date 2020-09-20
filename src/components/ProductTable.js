import React from 'react'
import PropTypes from 'prop-types';
const ProductTable = (props) => {
  console.log(props)
  return (
      
    <tr key>
      <td>{props.data.name}</td>
      <td>{props.data.price}</td>
      <td>{props.data.category}</td>
    </tr>
   
    )
}


// ProductTable.propTypes = {
//   data: PropTypes.bool ,
// }

export default ProductTable;