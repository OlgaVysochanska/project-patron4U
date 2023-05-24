import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import AuthLayout from 'components/AuthLayout';
import { store, persistor } from 'redux/store';
import CombinedContextProvider from 'CombinedContextProvider ';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/">
            <CombinedContextProvider>
              <App />
            </CombinedContextProvider>
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
