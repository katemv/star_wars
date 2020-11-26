import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from './types';
import Home from '../pages/Home/Home.page';


const RootPage = (): React.ReactElement =>  {
    return (
        <Switch>
            <Route exact path={ Routes.HOME } component={ Home } />
            <Redirect to={ Routes.HOME } />
        </Switch>
    );
};

export default RootPage;
