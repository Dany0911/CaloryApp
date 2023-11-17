import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonButton,
  IonToast,
  IonPopover,
  IonInput,
  IonLabel,
  IonList,
  IonItem,
} from '@ionic/react';
import Calculator from './Calculator';

const ExercisePage: React.FC = () => {
  const [workoutLevelPopover, setWorkoutLevelPopover] = useState<boolean>(false);
  const [workoutLevel, setWorkoutLevel] = useState<string | null>(null);
  const [workoutHoursPopover, setWorkoutHoursPopover] = useState<boolean>(false);
  const [workoutHours, setWorkoutHours] = useState<string>('');
  const [recommendations, setRecommendations] = useState<string>('');

  const openWorkoutLevelPopover = (event: React.MouseEvent) => {
    setWorkoutLevelPopover(true);
    const target = event.currentTarget;
    if (target) {
      (target as HTMLIonButtonElement).blur();
    }
  };

  const closeWorkoutLevelPopover = () => {
    setWorkoutLevelPopover(false);
  };

  const selectWorkoutLevel = (selectedLevel: string) => {
    setWorkoutLevel(selectedLevel);
    closeWorkoutLevelPopover();
  };

  const openWorkoutHoursPopover = (event: React.MouseEvent) => {
    setWorkoutHoursPopover(true);
    const target = event.currentTarget;
    if (target) {
      (target as HTMLIonButtonElement).blur();
    }
  };

  const closeWorkoutHoursPopover = () => {
    setWorkoutHoursPopover(false);
  };

  const saveInfo = () => {
    // Handle saving the workout information
  };

  const showExerciseRecommendation = () => {
    setRecommendations('Example Exercise Recommendation');
  };

  const showFoodRecommendation = () => {
    setRecommendations('Example Food Recommendation');
  };

  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={(e) => openWorkoutLevelPopover(e)}>
          Select Workout Level
        </IonButton>
        <IonPopover
          isOpen={workoutLevelPopover}
          onDidDismiss={() => closeWorkoutLevelPopover()}
          event={undefined}
        >
          <IonList>
            <IonItem button onClick={() => selectWorkoutLevel('Low')}>
              <IonLabel>Low</IonLabel>
            </IonItem>
            <IonItem button onClick={() => selectWorkoutLevel('Medium')}>
              <IonLabel>Medium</IonLabel>
            </IonItem>
            <IonItem button onClick={() => selectWorkoutLevel('Hard')}>
              <IonLabel>Hard</IonLabel>
            </IonItem>
          </IonList>
        </IonPopover>

        <IonButton onClick={(e) => openWorkoutHoursPopover(e)}>
          Enter Workout Hours
        </IonButton>
        <IonPopover
          isOpen={workoutHoursPopover}
          onDidDismiss={() => closeWorkoutHoursPopover()}
          event={undefined}
        >
          <IonInput
            placeholder="Enter Workout Hours"
            value={workoutHours}
            onIonChange={(e) => setWorkoutHours(e.detail.value!)}
          />
        </IonPopover>

        <IonButton onClick={saveInfo}>Submit</IonButton>

        <IonButton onClick={showExerciseRecommendation}>
          Recommendation Exercise
        </IonButton>

        <IonButton onClick={showFoodRecommendation}>
          Recommendation Food
        </IonButton>

        <IonToast
          isOpen={!!recommendations}
          onDidDismiss={() => setRecommendations('')}
          message={recommendations}
        />
      </IonContent>
    </IonPage>
  );
};

export default ExercisePage;

