import { put, select } from 'redux-saga/effects';

import CartActions from '~/store/ducks/cart';

export function* loadCart() {
  try {
    const products = yield select(state => state.cart.data);

    yield put(CartActions.loadCartSuccess(products));
  } catch (error) {
    yield put(CartActions.loadCartFailure());
  }
}

export function* addProduct({ product }) {
  const addedProducts = yield select(state => state.cart.data);

  if (!!addedProducts && !!addedProducts.find(item => item.id === product.id)) {
    const amountProduct = yield select(state => state.cart.amount_product);

    const currentAmount = amountProduct.find(item => item.id === product.id).amount;

    yield put(CartActions.setAmountProduct(product.id, currentAmount + 1));
  } else {
    yield put(CartActions.setAmountProduct(product.id, 1));
    yield put(CartActions.addProductSuccess(product));
  }
}
