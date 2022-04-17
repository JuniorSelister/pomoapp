import React from "react";

import { Switch, Route} from "react-router-dom";
import Index from '../layout/Index'

export default () => {

    return (
        <main className="Content">
            <Switch>
                <Route path="/layout/index">
                    <Index />
                </Route>
            </Switch>
        </main>
    )
}