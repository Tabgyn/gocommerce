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
  const cartProducts = yield select(state => state.cart.data);
  const addedProduct = cartProducts.find(item => item.id === product.id);

  if (addedProduct) {
    const productIndex = cartProducts.findIndex(item => item.id === product.id);
    const cartProduct = { ...product, quantity: Number(addedProduct.quantity) + 1 };
    let newCart = [];

    newCart = [...cartProducts];
    newCart.splice(productIndex, 1, cartProduct);

    yield put(CartActions.updateCartSuccess(newCart));
  } else {
    const cartProduct = { ...product, quantity: 1 };
    let newCart = [];

    newCart = [...cartProducts];
    newCart.push(cartProduct);

    yield put(CartActions.updateCartSuccess(newCart));
  }
}

export function* updateProduct({ id, quantity }) {
  const cartProducts = yield select(state => state.cart.data);
  const addedProduct = cartProducts.find(item => item.id === id);

  if (addedProduct) {
    const productIndex = cartProducts.findIndex(item => item.id === id);
    const cartProduct = { ...addedProduct, quantity };
    let newCart = [];

    newCart = [...cartProducts];
    newCart.splice(productIndex, 1, cartProduct);

    yield put(CartActions.updateCartSuccess(newCart));
  }
}

export function* removeProduct({ id }) {
  const cartProducts = yield select(state => state.cart.data);
  const addedProduct = cartProducts.find(item => item.id === id);

  if (addedProduct) {
    let newCart = [];

    newCart = [...cartProducts.filter(item => item.id !== id)];

    yield put(CartActions.updateCartSuccess(newCart));
  }
}
