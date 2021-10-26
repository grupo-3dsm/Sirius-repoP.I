import React from 'react';
import { DropdownProvider } from './hooks/dropdown';

import GlobalStyles from './styles/global';

import Layout from './Components/Layout';
import NavBar from './Components/Navbar';
import DropdownRoot from './Components/Dropdown';


const App: React.FC = () => {
    return (
      <>
        <Layout>
          <DropdownProvider>
            <NavBar />
            <DropdownRoot />
          </DropdownProvider>
        </Layout>
  
        <GlobalStyles />
      </>
    );
};

  export default App;
