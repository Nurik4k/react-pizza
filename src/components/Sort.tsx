import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../redux/slices/filter/selectors';
import {
  changeSort,
  closeSortLabel,
  toggleSortLabel,
} from '../redux/slices/filter/slice';
import { SortItem } from '../redux/slices/filter/types';

type ClickOutside = MouseEvent & {
  path: Node[];
};

export const sortItems: SortItem[] = [
  { title: 'популярности (ASC)', searchProp: 'rating' },
  { title: 'популярности (DESC)', searchProp: '-rating' },
  { title: 'цене (ASC)', searchProp: 'price' },
  { title: 'цене (DESC)', searchProp: '-price' },
  { title: 'алфавиту (ASC)', searchProp: 'name' },
  { title: 'алфавиту (DESC)', searchProp: '-name' },
];

export const Sort: React.FC = React.memo(() => {
  const sortRef = React.useRef<HTMLDivElement>(null);
  const { open: isOpen, sort: sortItem } = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onClickSortItem = (obj: SortItem) => {
    dispatch(changeSort(obj));
  };

  const onClickSortLabel = () => {
    dispatch(toggleSortLabel());
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ClickOutside;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        dispatch(closeSortLabel());
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label' onClick={onClickSortLabel}>
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{sortItem.title}</span>
      </div>
      {isOpen && (
        <div className='sort__popup'>
          <ul>
            {sortItems.map((item, i) => (
              <li
                key={i}
                onClick={() => onClickSortItem(item)}
                className={sortItem.searchProp === item.searchProp ? 'active' : ''}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

