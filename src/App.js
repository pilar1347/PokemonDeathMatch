import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as AnalyticsProvider } from '@carvana/analytics';
import ThemeProvider, { createGlobalStyle } from '@carvana/theme';
import store, { history } from './store/configureStore';
import configs from './store/configs';
import Routes from './Routes';
import Layout from './components/DELETEME-Layout/Layout';

const GlobalStyle = createGlobalStyle(process.env.NODE_ENV);

export default (
  <Provider store={store}>
    <ThemeProvider>
      <AnalyticsProvider configs={configs} debug>
        <GlobalStyle />
        <Layout>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </Layout>
      </AnalyticsProvider>
    </ThemeProvider>
  </Provider>
);
