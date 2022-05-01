import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
