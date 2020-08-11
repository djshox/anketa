import React, { lazy, useState } from "react";
import Head from "./../components/Head/head.jsx";
import Sidebar from "./../components/SideBar/sidebar.jsx";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import "antd/dist/antd.css";

const HomePage = lazy(() => import("./../components/Content/HomePage/HomeContainer.jsx"));
const AnketaPage = lazy(() => import("./../components/Content/Anketa/Anketa.jsx"));
const Tgbot = lazy(() => import("./../components/Content/tgBot/tgBot.jsx"));
const NonePage = lazy(() => import("./../roots/noneLayout"));

const HomePageLayout = (props) => {
    const [client, changeClient] = useState({})
    return (
        <BrowserRouter>
            <Head />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar name="asosiy" />

                    <div className="col-10" >
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route >
                            <Route exact path="/home" render={() => <HomePage changeClient={changeClient} />} />
                            <Route path="/anketa/:userId?" render={() => < AnketaPage client={client} />} />
                            <Route path="/tgbot" render={() => <Tgbot />} />
                            <Route render={() => <NonePage />} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter >

    );
}

export default HomePageLayout;
