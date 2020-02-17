import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Add from './pages/Add'
import Favorites from './pages/Favorites'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>
        <section className="titlePage">
          <header>
            <h2>Things I Do, You Never Knew</h2>
          </header>
        </section>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/add" component={Add}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
      <section className="footer">
        <p className="pFooter">#TIDYNK</p>
        <p className="pFooter">@UncrownedThrone</p>
      </section>
    </>
  )
}

export default App
