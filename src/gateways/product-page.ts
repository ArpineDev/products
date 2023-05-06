import { Category, Product } from '../models';
import { Category as APICategory } from './models/category';
import { Product as APIProduct } from './models/product';
import { IProductPageRepository } from '../services/products/interfaces';
import { categories, products } from './api';

export class MockProductPageGateway implements IProductPageRepository {
  async getProduct(productId: string): Promise<Product> {
    const product = products.find((item: APIProduct) => item.id === productId);
    if (product === undefined) {
      return Promise.reject(new Error('Product not found'));
    }

    return Promise.resolve(apiProductToModel(product));
  }

  async getLinkedProducts(productId: string): Promise<Product[]> {
    const result = products.filter((item: APIProduct) => item.id !== productId);
    return Promise.resolve(result.map(apiProductToModel));
  }

  async getCategories(): Promise<Category[]> {
    return Promise.resolve(categories.map(apiCategoryToModel));
  }
}

/**
 * Преобразование структуры товара, полученного из API в модель приложения
 */
function apiProductToModel(product: APIProduct): Product {
  return {
    ...product,
    category: product.categoryId ? { id: product.categoryId } : undefined,
  };
}

/**
 * Преобразование структуры категории, полученной из API в модель приложения
 */
function apiCategoryToModel(category: APICategory): Category {
  return {
    ...category,
  };
}
