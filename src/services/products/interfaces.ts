import { Category, Product } from '../../models';

/**
 * Интерфейс репозитория для получения данных для страницы товара
 */
export interface IProductPageRepository {
  /**
   * Возвращает данные о товаре для страницы товара
   */
  getProduct(productId: string): Promise<Product>;
  /**
   * Возвращает связанные товары для товара с идентификатором productId
   */
  getLinkedProducts(productId: string): Promise<Product[]>;
  /**
   * Возвращает список категорий
   */
  getCategories(): Promise<Category[]>;
}
