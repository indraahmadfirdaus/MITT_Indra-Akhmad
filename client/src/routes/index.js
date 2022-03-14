import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import MasterSkill from "../pages/MasterSkill";
import MasterSkillLevel from "../pages/MasterSkillLevel";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/master-skill-level" component={MasterSkillLevel} />
        <Route exact path="/master-skill" component={MasterSkill} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
