import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Offer from './components/Offer';
import SignUp from'./components/user/SignUp';
import SignIn from './components/user/SignIn';
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/offer" component={Offer} />
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/SignIn" component={SignIn}/>
            </Switch>
        </Router>
    )
}

export default Routes
