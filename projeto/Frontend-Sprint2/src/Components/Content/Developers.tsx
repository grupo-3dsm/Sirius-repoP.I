import React from 'react';

import { DevelopersWrapper } from './styles';

const Developers: React.FC = () => (
  <DevelopersWrapper>
    <div className="primary">
      <span className="documentation" />

      <div>
        <h3>Documentação</h3>
        <p>Informações Técnicas</p>

        <div>
          <ul>
            <li>
              <h4>Sobre o App</h4>
            </li>
            <li>Checkout pré-integrado</li>
            <li>Bibliotecas usadas</li>
            <li>Plugins</li>
            <li>Exemplos de código</li>
          </ul>

          <ul>
            <li>
              <h4>Guias</h4>
            </li>
            <li>Acesse a nuvem</li>
            <li>Sátelites Disponiveis</li>
          </ul>
        </div>
      </div>
    </div>

    <ul className="secondary">
      <li>
        <span className="api-reference" />
        Referência completa da API
      </li>
      <li>
        <span />
        Status da API
      </li>
      <li>
        <span />
        Código aberto
      </li>
    </ul>
  </DevelopersWrapper>
);

export default Developers;
