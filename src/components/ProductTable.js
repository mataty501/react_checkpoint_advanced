import React from 'react'
import PropTypes from 'prop-types';
const ProductTable = (props) => {
  return (
      
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.price}</td>
      <td>{props.data.category}</td>
    </tr>
   
    )
}


ProductTable.propTypes = {
   category: PropTypes.oneOf(['electronics','clothes'])
}

export default ProductTable;