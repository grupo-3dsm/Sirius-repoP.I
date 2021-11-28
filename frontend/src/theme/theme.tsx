import { ThemeProvider } from 'styled-components';

const fontSizes: any = [18, 24, 50]
fontSizes.body = fontSizes[0]
fontSizes.bodyLarge = fontSizes[1]
fontSizes.bodyExtraLarge = fontSizes[2]

const primary = '#D98D1A';
const secondary = '#232323';

const theme = {
  fontSizes,
  colors: {
    primary,
    secondary
  },
};

export type ThemeType = typeof theme; 

export const Theme: React.FC = ({ children }) => {
  return(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}