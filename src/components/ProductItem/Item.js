import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Item extends Component {
  onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Ban chac chan muon xoa ?')) {
      this.props.onDelete(id);
    }
  };
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? 'Còn Hàng' : 'Hết hàng';
    var statusClass = product.status ? 'warning' : 'default';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>
            {statusName}
          </span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className='btn btn-success mr-10'
          >
            Sửa
          </Link>

          <button
            type='button'
            className='btn btn-danger'
            onClick={() => this.onDelete(product.id)}
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
