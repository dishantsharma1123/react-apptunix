import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Details from './Components/Details'
import Cart from './Components/Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className='Site'>
      <Router>
        <Provider store={store}>
          <div className="Site-content">
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/cart' exact component={Cart} />
              <Route path='/details/:id' exact component={Details} />
            </Switch>
          </div>
        </Provider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
