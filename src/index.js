import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from '~/redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <GlobalStyles>
            <Provider store={store}>
                <App />
            </Provider>
            ,
        </GlobalStyles>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
