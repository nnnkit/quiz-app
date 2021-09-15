import React from "react";
import Menu from "./Menu";
import Quiz from "./Quiz";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <svg
          id="visual"
          viewBox="0 0 900 600"
          className="background-svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <rect x="0" y="0" width="960" height="540" fill="#FFFFFF"></rect>
          <path
            d="M0 96L192 97L384 77L576 86L768 94L960 68L960 0L768 0L576 0L384 0L192 0L0 0Z"
            fill="#002233"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          ></path>
        </svg>
        <div className="container">
          <div
            className="altcampus columns is-centered is-multiline mx-4 py-4"
            style={{ marginTop: "8px" }}
          >
            <Link to="/">
              <span> quiz</span>App
            </Link>
          </div>

          <Switch>
            <Route path="/" exact>
              <Menu />
            </Route>
            <Route path="/quiz/:id" component={Quiz} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

function NoMatch() {
  return (
    <h2 className="has-text-danger title mt-6 has-text-centered">
      404: Page not found!
    </h2>
  );
}
export default App;
