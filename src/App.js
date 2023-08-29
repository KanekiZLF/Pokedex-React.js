import React from 'react';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Home } from './pages/Home';

// Função para gerar nomes de classes personalizados
const generateClassName = createGenerateClassName({
  productionPrefix: 'prefixo',
});

// Definindo o tema personalizado
const theme = createTheme({
  // Defina suas configurações de tema aqui
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  // Outras configurações de tema
});

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
