import React, { Component } from 'react'
//component
import Contacts from './Component/Contact/Contacts'
import Header from './Component/layout/Header'
import { Provider } from './context'
import AddContact from './Component/Contact/AddContact'
import About from './Component/Pages/About'
import NotFoundPage from './Component/Pages/NotFoundPage'
import DetailContact from './Component/Pages/DetailContact'
import Album from './Component/Pages/Album'
import EditContact from './Component/Contact/EditContact'

//router
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Provider>
            <Router base={process.env.PUBLIC_URL}>
              <Header branding = 'Contact Manager'/>
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={Contacts}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/detail/:id' component={DetailContact}/>
                  <Route exact path='/addcontact' component={AddContact}/>
                  <Route exact path='/editcontact/:id' component={EditContact}/>
                  <Route exact path='/album' component={Album}/>
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
            </Router>
          </Provider>
        </React.Fragment>
    )
  }
}

