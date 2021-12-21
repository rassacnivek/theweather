import { Provider } from 'react-redux'
import Home from './pages/home'
import Header from './layout/header'
import Sidebar from './layout/sidebar'
import { store } from './config/store'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <Sidebar />
    </Provider>
  )
}

export default App
