import { createAction } from '@reduxjs/toolkit';
import { LinkedProduct, Product } from '../../models';

export const setProduct = createAction<Product>('product-page/set-product');

export const setLinkedProducts = createAction<LinkedProduct[]>('product-page/set-linked-product');

export const addProductToCompareList = createAction<Product>(
  'product-page/add-product-to-compare-list',
);
