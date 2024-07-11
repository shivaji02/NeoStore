import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogNav from './LogNav';
import HomeNav from './HomeNav';

const MainNavigation = () => {
    // Check if user is logged in
    const isLoggedIn = true; // Replace with your logic to check if user is logged in

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {isLoggedIn ? <HomeNav /> : <LogNav />}
                </Route>
                {/* Add more routes here */}
            </Switch>
        </Router>
    );
};

export default MainNavigation;
