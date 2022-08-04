import React, { Component } from 'react';
import './App.css'
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: cats
    }
  }


  render() {
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/catedit" component ={CatEdit} />
          <Route path="/catindex" render={() => <CatIndex cats={this.state.cats} />} />
          <Route path="/catnew" component ={CatNew} />
          <Route path="/catshow/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
            return <CatShow cat={cat}/>
          }} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
     
    )
  }
}

export default App
