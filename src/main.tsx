import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import store from './redux/store.ts';
import routes from './routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    </React.StrictMode>
);
