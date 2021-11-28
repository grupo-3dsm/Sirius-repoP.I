import Routes from "./routes/routes";
import { Theme, GlobalStyles } from './theme';


export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  );
}

export default App;
