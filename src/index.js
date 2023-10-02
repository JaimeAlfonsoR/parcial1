import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, Row } from 'react-bootstrap';

import { IntlProvider } from 'react-intl';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const root = ReactDOM.createRoot(document.getElementById('root'));
const userlanguaje = navigator.language || navigator.userlanguaje;
root.render(
  <Container className="mt-3">
    <Row>
      <IntlProvider locale={userlanguaje} messages={userlanguaje.includes('es') ? localeEsMessages : localeEnMessages}>
        <App />
      </IntlProvider>
    </Row>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
