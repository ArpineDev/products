import { Category } from './models/category';
import { Product } from './models/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Товар 1',
    price: 9.99,
    categoryId: '1.1.1',
  },
  {
    id: '2',
    name: 'Товар 2',
    price: 109.9,
    categoryId: '1.1.1',
  },
  {
    id: '3',
    name: 'Товар 3',
    price: 80,
    categoryId: '1.2',
  },
  {
    id: '4',
    name: 'Товар 4',
    price: 200,
    categoryId: '2',
  },
  {
    id: '5',
    name: 'Товар 5',
    price: 34.2,
    categoryId: '1.2',
  },
  {
    id: '6',
    name: 'Товар 6',
    price: 666.7,
    categoryId: '3',
  },
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Категория 1',
    children: [
      {
        id: '1.1',
        name: 'Категория 1.1',
        children: [
          {
            id: '1.1.1',
            name: 'Категория 1.1.1',
          },
        ],
      },
      {
        id: '1.2',
        name: 'Категория 1.2',
      },
    ],
  },
  {
    id: '2',
    name: 'Категория 2',
    children: [
      {
        id: '2.1',
        name: 'Категория 2.1',
      },
    ],
  },
];
