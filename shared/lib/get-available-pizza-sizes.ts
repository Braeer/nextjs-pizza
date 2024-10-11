import { Variant } from '../components/shared';
import { pizzaSizes, PizzaType } from './../constants/pizza';
import { ProductItem } from '@prisma/client';

/**
 * Функция для получения доступных размеров пиццы
 *
 * @param type Тип пиццы
 * @param items Список вариаций
 *
 * @returns Список доступных размеров
 */

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByPizzas = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByPizzas.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};
