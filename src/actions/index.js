import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi('products', 'GET', null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};
export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};
export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, 'DELETE', null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};
export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCTS,
    id,
  };
};
export const actAddproductRequest = (product) => {
  return (dispatch) => {
    return callApi('products', 'POST', product).then((res) => {
      dispatch(actAddproduct(res.data));
    });
  };
};
export const actAddproduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};
export const actGetproductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, 'GET', null).then((res) => {
      dispatch(actGetproduct(res.data));
    });
  };
};
export const actGetproduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product,
  };
};

export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, 'PUT', product).then(
      (res) => {
        dispatch(actUpdateProduct(res.data));
      },
    );
  };
};
export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
  };
};
