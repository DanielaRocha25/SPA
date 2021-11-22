import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Teorias from "./Teorias";
import Contact from "./Contact";
import Tips from "./Tips";
import Marvel from "./Marvel";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>FEEL & BE & LEARN</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dicas">Dicas de Filmes</NavLink>
            </li>
            <li>
              <NavLink to="/teorias">Harry Potter</NavLink>
            </li>
            <li>
              <NavLink to="/Marvel">Marvel</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contato</NavLink>
            </li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/teorias" component={Teorias} />
              <Route path="/dicas" component={Tips} />
              <Route path="/Marvel" component={Marvel} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
