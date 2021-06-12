import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStrip, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Orders } from './components/Orders'
const promise = loadStripe("pk_test_51J1PoUC5o66MHo6PP1M2U2CgsPpDiRvrlp6Of9arabEBZs6AwcvfZPwvRcoVkcpb3CbE8gWCJNJ13pap2VredG8700kHR14Y59")

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User is >>', authUser);

      if (authUser) {
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }

    })
  }, [])

  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;