import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components' // ThemeProvider é um component

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    // o tema só será aplicado para componentes que estiverem dentro do ThemeProvider
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* BrowserRouter precisa ficar por volda das rotas */}
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
