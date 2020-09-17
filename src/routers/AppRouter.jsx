import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import Test from "../components/Test";

// const PrivateRoute = ({
//   component: Component,
//   isTokenValid: isTokenValid,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isTokenValid === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
