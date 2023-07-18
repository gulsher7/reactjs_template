import { Suspense } from 'react';
import './App.css';
import MyRoutes from './navigations/MyRoutes';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from './redux/store';

const { dispatch } = store;

function App() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n} >
        <Suspense fallback="...loading">
          <MyRoutes />
        </Suspense>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
