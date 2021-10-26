import React from 'react';

import { CompanyWrapper } from './styles';

const Company: React.FC = () => {
  return (
    <CompanyWrapper>
      <ul className="primary">
        <li>
          <span />
          Sobre a Sirius
        </li>
        <li>
          <span />
          Informações
        </li>
        <li>
          <span />
          Contato
        </li>
      </ul>
    </CompanyWrapper>
  );
};

export default Company;
