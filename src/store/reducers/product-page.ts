import { createReducer } from '@reduxjs/toolkit';
import { LinkedProduct, Product } from '../../models';

type CatalogPageState = {
  product: Product | undefined;
  linkedProducts: LinkedProduct[] | undefined;
  comparingProducts: Product[] | undefined;
};

const defaultState: CatalogPageState = {
  product: undefined,
  linkedProducts: undefined,
  comparingProducts: undefined,
};

export const productPageReducer = createReducer<CatalogPageState>(defaultState, {});
