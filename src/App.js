import React, { Component } from 'react';
import cats from './mockCats';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          cats: cats
        }
    }
  render() {
    console.log(this.state.cats)
    return (
      <>
      <Router>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/catedit" component={CatEdit} />
                <Route path="/catindex" component={CatIndex} />
                <Route path="/catnew" component={CatNew} />
                <Route path="/catshow" component={CatShow} />
                <Route component={NotFound}/>
            </Switch>
        <Footer />
    </Router>
      </>
    )
  }
}

export default App
