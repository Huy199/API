import React, { Component } from 'react';
import List from './../../components/ProductList/List';
import ProductItem from './../../components/ProductItem/Item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from './../../actions/index';
class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };

  render() {
    var { products } = this.props;

    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <Link to='/product/add' className='btn btn-info mb-10'>
          Thêm sản phẩm
        </Link>
        <List>{this.showProducts(products)}</List>
      </div>
    );
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}
// lấy tất cả products từ store
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
// lưu lên store
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListPage);
