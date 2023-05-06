import { useMediaQuery } from 'react-responsive';

/**
 * Возвращает true, если ширина экрана больше, чем minWidth
 */
export function useMoreThenMediaQuery(minWidth: number): boolean {
  return useMediaQuery({
    query: `(min-width: ${minWidth}px)`,
  });
}

/**
 * Возвращает true, если ширина экрана меньше, чем maxWidth
 */
export function useLessThenMediaQuery(maxWidth: number | string): boolean {
  return useMediaQuery({
    query: `(max-width: ${maxWidth}px)`,
  });
}
