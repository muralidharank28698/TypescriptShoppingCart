import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <Header />
      <Products />
    </div>
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/" component={} />

    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
{
  /* <Route exact path="/foo" component={} />
          <Route exact path="/bar" component={} /> */
}
