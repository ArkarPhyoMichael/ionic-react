import { FC } from "react";
import {
  IonApp,
  IonRedirect,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import MainPage from "../pages/main";

interface AppShellProps {}

const AppShell: FC<AppShellProps> = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            {/* <Route path='/main' render={() => <MainPage />} />
            <Route exact path='/' render={() => <Redirect to="/main" />} /> */}
            <Route exact path="/main">
              <MainPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/main" />
              {/* <Redirect to="/main" /> */}
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
