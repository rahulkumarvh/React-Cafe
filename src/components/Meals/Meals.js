import { Fragment } from "react";

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <Fragment>
      <div className={classes.space}></div>
      <AvailableMeals />
      <div className={classes.space2}></div>
      <MealsSummary />
    </Fragment>
  );
};

export default Meals;
