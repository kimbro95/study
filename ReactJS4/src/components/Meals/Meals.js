import React from "react";

import AvaliableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvaliableMeals />
        </React.Fragment>
    );
};

export default Meals;