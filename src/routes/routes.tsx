import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "../layout/layout";
import { About } from "../views/About/about";
import { Contact } from "../views/Contact/contact";
import { Home } from "../views/Home/home";
import { Product } from "../views/Product/product";

export const Routes = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/product">
                        <Product />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};
