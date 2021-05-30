import React,{useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

 console.log("USER IS>>",user);

  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/checkout">
    <Checkout/>
     </Route>
    <Route path="/login">
     <Login/>
    </Route>
    <Route path="/">
    <Header/>
      <Home/>

    </Route>

    </Switch>

    </div>
    </Router>
  );
}

export default App;
