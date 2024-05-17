import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@app/App.jsx'
import '@styles/global.scss'
import { Provider } from 'react-redux';
import store from '@app/store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
