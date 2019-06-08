import { all, takeLatest } from 'redux-saga/effects';

import { CategoryTypes } from '~/store/ducks/categories';
import { ProductTypes } from '~/store/ducks/products';
import { CartTypes } from '~/store/ducks/cart';
import { loadCategories, setCurrentCategory } from './categories';
import { loadProduct } from './products';
import { loadCart, addProduct } from './cart';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoryTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(CategoryTypes.SET_CURRENT, setCurrentCategory),
    takeLatest(ProductTypes.LOAD_PRODUCT_SUCCESS, loadProduct),
    takeLatest(CartTypes.LOAD_CART_REQUEST, loadCart),
    takeLatest(CartTypes.ADD_PRODUCT_REQUEST, addProduct),
  ]);
}
