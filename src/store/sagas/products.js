import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductActions from '~/store/ducks/products';

export function* loadProduct({ id }) {
  try {
    const response = yield call(api.get, `products/${id}`);

    yield put(ProductActions.loadProductSuccess(response.data));
  } catch (error) {
    yield put(ProductActions.loadProductFailure());
  }
}
