import React from 'react';

import { ProductsWrapper } from './styles';

const Products: React.FC = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>Objetivo do Site</h3>
          <p>Imagens de Satelites com rapidez</p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Diversas Funcionalidades</h3>
          <p>Um mapa completo e responsivo</p>
        </div>
      </li>
    </ul>

  </ProductsWrapper>
);

export default Products;
