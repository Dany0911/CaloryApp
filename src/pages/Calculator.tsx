import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonToast } from '@ionic/react';
import CaloryIntake from './CaloryIntake';

interface CalculatorProps {
  workoutLevel: string | null;
}

const Calculator: React.FC<CalculatorProps> = ({ workoutLevel }) => {
  const [caloriesInserted, setCaloriesInserted] = useState<number | null>(null);
  const [burnedCalories, setBurnedCalories] = useState<number | null>(null);
  const [showToastCalories, setShowToastCalories] = useState<boolean>(false);
  const [caloriesDifference, setCaloriesDifference] = useState<number | null>(null);

  // Function to set inserted calories
  const setInsertedCaloriesFn = (insertedCalories: number) => {
    setCaloriesInserted(insertedCalories);
    showToastCaloriesFn(`Inserted Calories: ${insertedCalories}`);
  };

  // Function to set burned calories based on workout level
  const setBurnedCaloriesFn = () => {
    let burnedCaloriesValue = 0;

    if (workoutLevel === 'Low') {
      burnedCaloriesValue = 100;
    } else if (workoutLevel === 'Medium') {
      burnedCaloriesValue = 200;
    } else if (workoutLevel === 'Hard') {
      burnedCaloriesValue = 300;
    }

    setBurnedCalories(burnedCaloriesValue);
    showToastCaloriesFn(`Burned Calories: ${burnedCaloriesValue}`);
  };

  // Function to show calories toast with message for 2 seconds
  const showToastCaloriesFn = (message: string) => {
    setShowToastCalories(true);
    setTimeout(() => {
      setShowToastCalories(false);
    }, 2000);
  };

  // Function to show calories difference toast with message for 2 seconds
  const showCaloriesDifference = () => {
    if (caloriesInserted !== null && burnedCalories !== null) {
      setCaloriesDifference(caloriesInserted - burnedCalories);
      showToastCaloriesFn(`Calories Difference: ${caloriesDifference}`);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={() => setInsertedCaloriesFn(300)}>Set Inserted Calories</IonButton>
        <IonButton onClick={setBurnedCaloriesFn}>Set Burned Calories</IonButton>
        <IonButton onClick={showCaloriesDifference}>Show Calories Difference</IonButton>

        <IonToast
          isOpen={showToastCalories}
          onDidDismiss={() => setShowToastCalories(false)}
          message={`Calories Difference: ${caloriesDifference}`}
        />
      </IonContent>
    </IonPage>
  );
};

export default Calculator;

