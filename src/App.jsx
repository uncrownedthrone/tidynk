import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Router>
        <section className="titlePage">
          <header>
            <h2>Things I Do, </h2>
            <h2>You Never Knew</h2>
          </header>
        </section>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
      <section className="button">
        <button>Random</button>
      </section>
      <section className="footer">
        <p className="pFooter">#TIDYNK</p>
        <p className="pFooter">@UncrownedThrone</p>
      </section>
    </>
  )
}

export default App
