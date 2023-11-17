import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const SideMenu: React.FC = () => (
  <IonMenu contentId="main">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem button routerLink="/calory-intake">
          Calory Intake
        </IonItem>
        <IonItem button routerLink="/exercise-page">
          Exercise Page
        </IonItem>
        <IonItem button routerLink="/calculator">
          Calculator
        </IonItem>
        <IonItem button routerLink="/user-info">
          User Information
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default SideMenu;
