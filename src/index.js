import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouters'
import 'normalize.css/normalize.css'
import './styles/app.scss'
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root')

ReactDOM.render(<AppRouter />, app);
registerServiceWorker();
