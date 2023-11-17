import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonInput, IonCheckbox } from '@ionic/react';

const UserInfo: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [activityLevel, setActivityLevel] = useState<string | null>(null);
  const [medicalProblems, setMedicalProblems] = useState<boolean>(false);

  const submitUserInfo = () => {
    // Handle the submission of user information
  };

  return (
    <IonPage>
      <IonContent>
        <IonInput placeholder="Enter Age" onIonChange={(e) => setAge(parseInt(e.detail.value!, 10))} />
        <IonInput placeholder="Enter Height" onIonChange={(e) => setHeight(parseInt(e.detail.value!, 10))} />
        <IonInput placeholder="Enter Weight" onIonChange={(e) => setWeight(parseInt(e.detail.value!, 10))} />
        <IonInput placeholder="Enter Activity Level" onIonChange={(e) => setActivityLevel(e.detail.value!)} />
        <IonCheckbox checked={medicalProblems} onIonChange={() => setMedicalProblems(!medicalProblems)}>
          Medical Problems
        </IonCheckbox>

        <IonButton onClick={submitUserInfo}>Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserInfo;