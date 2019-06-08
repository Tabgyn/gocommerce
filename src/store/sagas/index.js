import { all, takeLatest } from 'redux-saga/effects';

import { CategoryTypes } from '~/store/ducks/categories';
import { ProductTypes } from '~/store/ducks/products';
import { CartTypes } from '~/store/ducks/cart';
import { loadCategories, setCurrentCategory } from './categories';
import { loadProduct } from './products';
import {
  loadCart, addProduct, updateProduct, removeProduct,
} from './cart';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoryTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(CategoryTypes.SET_CURRENT, setCurrentCategory),
    takeLatest(ProductTypes.LOAD_PRODUCT_REQUEST, loadProduct),
    takeLatest(CartTypes.LOAD_CART_REQUEST, loadCart),
    takeLatest(CartTypes.ADD_PRODUCT_REQUEST, addProduct),
    takeLatest(CartTypes.UPDATE_PRODUCT_REQUEST, updateProduct),
    takeLatest(CartTypes.REMOVE_PRODUCT_REQUEST, removeProduct),
  ]);
}
