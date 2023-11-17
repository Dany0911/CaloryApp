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

const CaloryIntake: React.FC = () => {
  const [mealPopover, setMealPopover] = useState<boolean>(false);
  const [caloriesPopover, setCaloriesPopover] = useState<boolean>(false);
  const [meal, setMeal] = useState<string | null>(null);
  const [calories, setCalories] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [previousInfo, setPreviousInfo] = useState<string>('');

  const openMealPopover = (event: React.MouseEvent) => {
    setMealPopover(true);
    const target = event.currentTarget;
    if (target) {
      (target as HTMLIonButtonElement).blur();
    }
  };

  const closeMealPopover = () => {
    setMealPopover(false);
  };

  const selectMeal = (selectedMeal: string) => {
    setMeal(selectedMeal);
    closeMealPopover();
  };

  const openCaloriesPopover = (event: React.MouseEvent) => {
    setCaloriesPopover(true);
    const target = event.currentTarget;
    if (target) {
      (target as HTMLIonButtonElement).blur();
    }
  };

  const closeCaloriesPopover = () => {
    setCaloriesPopover(false);
  };

  const saveInfo = () => {
    if (meal && calories) {
      setPreviousInfo(`Meal: ${meal}, Calories: ${calories}`);
    }
  };

  const showToastWithInfo = () => {
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={(e) => openMealPopover(e)}>Select Meal</IonButton>
        <IonPopover
          isOpen={mealPopover}
          onDidDismiss={() => closeMealPopover()}
          event={undefined}
        >
          <IonList>
            <IonItem button onClick={() => selectMeal('Breakfast')}>
              <IonLabel>Breakfast</IonLabel>
            </IonItem>
            <IonItem button onClick={() => selectMeal('Lunch')}>
              <IonLabel>Lunch</IonLabel>
            </IonItem>
            <IonItem button onClick={() => selectMeal('Snack')}>
              <IonLabel>Snack</IonLabel>
            </IonItem>
            <IonItem button onClick={() => selectMeal('Dinner')}>
              <IonLabel>Dinner</IonLabel>
            </IonItem>
          </IonList>
        </IonPopover>

        <IonButton onClick={(e) => openCaloriesPopover(e)}>Enter Calories</IonButton>
        <IonPopover
          isOpen={caloriesPopover}
          onDidDismiss={() => closeCaloriesPopover()}
          event={undefined}
        >
          <IonInput
            placeholder="Enter Calories"
            value={calories}
            onIonChange={(e) => setCalories(e.detail.value!)}
          />
        </IonPopover>

        <IonButton onClick={saveInfo}>Submit</IonButton>
        <IonButton onClick={showToastWithInfo}>Show Previous Info</IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={previousInfo}
        />
      </IonContent>
    </IonPage>
  );
};

export default CaloryIntake;