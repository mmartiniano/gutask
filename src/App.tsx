import React, { useReducer } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Context, reducer, initialState } from './Context';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Main from './components/Main';
import Home from './pages/Home';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Context.Provider value={{ state, dispatch }}>
        <Header toggleTheme={toggleTheme} />

        <Main>
          <Home />
        </Main>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
