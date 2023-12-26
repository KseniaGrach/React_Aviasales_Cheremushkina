import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Styles from './Filter.module.scss';

import { switchFilterAll, switchFilters } from '../../store/ticketsList';

const Filter = () => {
  const [checkedAll, setCheckedAll] = useState(true);
  const [filters, setFilters] = useState([
    { name: "no_transfers", label: 'Без пересадок', value: 0, checked: true },
    { name: "one_transfer", label: 'Одна пересадка', value: 1, checked: true },
    { name: "two_transfers", label: 'Две пересадки', value: 2, checked: true },
    { name: "three_transfers", label: 'Три пересадки', value: 3, checked: true },
  ]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const allChecked = filters.every((filter) => filter.checked);
    setCheckedAll(allChecked);
  }, [filters]);

  useEffect(() => {
    dispatch(switchFilterAll(checkedAll));
  }, [dispatch, checkedAll]);

  useEffect(() => {
    dispatch(switchFilters(filters));
  }, [dispatch, filters])
  
  const handleCheckAll = () => {
    const updatedFilters = filters.map((filter) => ({
      ...filter,
      checked: !checkedAll,
    }));
    setFilters(updatedFilters);
    setCheckedAll(!checkedAll);
  };
  
  const handleCheckFilter = (event, filterName) => {
    setFilters(
      filters.map(filter => {
        if (filter.name === filterName) {
          return {...filter, checked: event.target.checked};
        }

        return filter;
      })
    );

    const isAllChecked = filters.every(filter => filter.checked);
    setCheckedAll(isAllChecked);
  };
  
  return (
    <div className={Styles.filter}>
      <div className={Styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={Styles.wrapper}>
        <input
          type="checkbox"
          id="all"
          name="all"
          checked={checkedAll}
          className={Styles.checkbox}
          onChange={handleCheckAll}
        />
        <label className={Styles.label} htmlFor="all">
          Все
        </label>
        {filters.map(filter => (
          <div key={filter.name}>
            <input
              type="checkbox"
              id={filter.name}
              name={filter.name}
              checked={filter.checked}
              className={Styles.checkbox}
              onChange={event => handleCheckFilter(event, filter.name)}
            />
            <label className={Styles.label} htmlFor={filter.name}>
              {filter.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;