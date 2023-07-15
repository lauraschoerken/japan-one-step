import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'stores/store'
import App from './App.tsx'
import i18n from './i18n'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<I18nextProvider i18n={i18n}>
					<App />
				</I18nextProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
