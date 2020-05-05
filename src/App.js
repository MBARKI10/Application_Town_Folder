import React,{Component} from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Counter from './counter';
import About from './About'
import Gallery from './Gallery';
import HitDetailles from './HitDetailles'
import Home from './Home';

 class App extends Component {
  render(){
    return(
        <Router>
           <nav className="navbar navbar-expand navbar-brand m-3">
                <ul className="navbar-nav">
                  <li>
                     <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/counter">Counter</Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
                </ul>
          </nav>
          <div className="m-4">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/counter" component={Counter} />
                  <Route path="/about" component={About} />
                  <Route path="/gallery" component={Gallery} />
                  <Route path="/hitDetails/:id" component={HitDetailles}/>
                </Switch>
          </div>
      </Router>
    )
  }
 }
 export default App ;