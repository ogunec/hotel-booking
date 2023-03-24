import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataProvider from './contex/data.context';
import './index.css';
import 'moment/locale/tr' //For Turkey
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProvider>
        <App />
    </DataProvider>
);
