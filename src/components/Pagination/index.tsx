import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/slices/filter/slice';
import styles from './Pagination.module.scss';

export const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const onChangePage = (index: number) => {
    dispatch(changePage(index));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
    />
  );
}

