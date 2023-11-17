import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SideMenu from './components/SideMenu';
import CaloryIntake from './pages/CaloryIntake';
import ExercisePage from './pages/ExercisePage';
import Calculator from './pages/Calculator';
import UserInfo from './pages/UserInfo';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <IonSplitPane contentId="main">
          <SideMenu />
          <IonRouterOutlet id="main">
            <Route path="/calory-intake" component={CaloryIntake} exact/>
            <Route path="/exercise-page" component={ExercisePage} exact />
            <Route path="/calculator" component={Calculator} exact />
            <Route path="/user-info" component={UserInfo} exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;