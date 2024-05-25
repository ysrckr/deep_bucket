import './main.css';
import './globals.css';

import { Button } from './components/ui/Button';
import { Login } from './pages/login';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <h1>Hello, world!</h1>
      <Button> </Button>
      <Login />
    </div>{' '}
  </React.StrictMode>,
);
