import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  actAddproductRequest,
  actGetproductRequest,
  actUpdateProductRequest,
} from './../../actions/index';
import { connect } from 'react-redux';
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: '',
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status,
      });
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value =
      target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    if (id) {
      //update
      this.props.onUpdateProduct(product);
      history.goBack();
    } else {
      this.props.onAddProduct(product);
      history.goBack();
    }
  };
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
        <form onSubmit={this.onSave}>
          <div class='form-group'>
            <label>Tên sản phẩm</label>
            <input
              type='text'
              class='form-control'
              name='txtName'
              value={txtName}
              onChange={this.onChange}
            />
          </div>

          <div class='form-group'>
            <label>Giá: </label>
            <input
              type='number'
              class='form-control'
              name='txtPrice'
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>

          <div class='form-group'>
            <label>Trang Thai: </label>
          </div>
          <div class='checkbox'>
            <label>
              <input
                type='checkbox'
                name='chkbStatus'
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Còn hàng
            </label>
          </div>
          <Link to='/product-list' className='btn btn-danger mr-10'>
            Trở Lại
          </Link>
          <button type='submit' className='btn btn-primary'>
            Lưu
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddproductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetproductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductActionPage);
