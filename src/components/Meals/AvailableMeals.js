import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cappuccino",
    description: "Experience love at first sip.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Americano",
    description: "Given enough coffee, anything is possible",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Espresso",
    description: "Expresso yourself",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Mocha",
    description: "Golden roasted, richer, smoother",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Iced Coffee",
    description: "Frappuccino. Work can wait",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
