import React from 'react';
import { Title } from './title';
import { FilterCheckBox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckBox text="Можно собирать" value="1" />
        <FilterCheckBox text="Новинки" value="2" />
      </div>

      {/* Минимальная и максимальная цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
        ]}
        items={[
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
          { text: 'Сыр', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Пармезан', value: '3' },
        ]}
      />
    </div>
  );
};
