import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'

function RouterView({ history, app }) {
    const Login = dynamic({
        app,
        component: () => import('@/containers/login'),
    })
    const Home = dynamic({
        app,
        component: () => import('@/containers/home'),
    })

    return (
        <Router history={history}>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default RouterView;
