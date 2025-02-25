import { createRoot } from 'react-dom/client'
import { Layout } from './Layout.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Layout />
	</BrowserRouter>
)
