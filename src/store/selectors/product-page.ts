import { RootState } from '..';
import { LinkedProduct, Product } from '../../models';

const productPageSelector = (state: RootState) => state.productPage;

export const productSelector = (state: RootState) => productPageSelector(state).product;

export const linkedProductsSelector = (state: RootState): LinkedProduct[] =>
  productPageSelector(state).linkedProducts || [];

export const compareListSelector = (state: RootState): Product[] =>
  productPageSelector(state).comparingProducts || [];
