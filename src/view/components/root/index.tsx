import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Root: FC = () => {
  return (
    <div>
      <ul>
        {[1, 2, 3, 4, 5, 6].map((productId) => (
          <li key={productId}>
            <Link to={`/products/${productId}`}>Товар {productId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
