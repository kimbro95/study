import styles from './AvaliableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';

const AvaliableMeals = () => {
    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals } = useFetch();

    const mealList = (data) => {
        const loadedMeals = [];
        for (const key in data) {
            loadedMeals.push({
                id: key,
                name: data[key].name,
                price: data[key].price,
                description: data[key].description,
            });
        }
        setMeals(loadedMeals);
    }
    useEffect(() => {
        fetchMeals(
            { url: 'https://react-http-ff0f3-default-rtdb.asia-southeast1.firebasedatabase.app/meals' },
            mealList
        );
    }, [fetchMeals]);

    return (
        <section className={styles.meals}>
            <Card>
                {isLoading && <p>Loading...</p>}
                {!isLoading && meals.length === 0 && !error && <p>Found No Meals.</p>}
                {!isLoading && meals.length > 0 &&
                    <ul>
                        {meals.map((meal) =>
                            <MealItem
                                id={meal.id}
                                key={meal.id}
                                name={meal.name}
                                price={meal.price}
                                description={meal.description}
                            />
                        )}
                    </ul>
                }
                {!isLoading && error && <p>{error}</p>}
            </Card>
        </section>
    );
};

export default AvaliableMeals;