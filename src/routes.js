import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="./repositories" component=${Repositories} />
            </Switch>
        </BrowserRouter>
    )
}