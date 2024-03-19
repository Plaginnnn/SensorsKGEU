import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import DataProvider from './utils/DataProvider'
import ThemeProvider from './utils/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<DataProvider>
					<App />
				</DataProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>
)
