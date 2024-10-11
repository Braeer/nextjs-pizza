import { Ingredient, ProductItem } from '@prisma/client';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza';

/**
 * Функция для получения информации о пицце в описании и суммарной стоимости
 * @param type Тип пиццы (Традиционная или Тонкая)
 * @param size Размер пиццы (20, 30 или 40 см)
 * @param items Список вариаций
 * @param ingredients Список ингредиентов
 * @param selectedIngredients Выбранные ингредиенты
 *
 * @returns Объект с информацией о пицце и суммарной стоимости
 */

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

  return { totalPrice, textDetails };
};
