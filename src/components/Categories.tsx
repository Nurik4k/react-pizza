import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from '../redux/slices/filter/selectors';
import { changeCategory} from '../redux/slices/filter/slice';

export const Categories: React.FC = React.memo( () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const { categoryId: category } = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onChangeCategory = (i: number): void => {
    dispatch(changeCategory(i));
  }

  return (
    <div className='categories'>
      <ul>
        {categories.map((cat, i) => (
          <li
            className={category === i ? 'active' : ''}
            onClick={() => onChangeCategory(i)}
            key={i}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
})

