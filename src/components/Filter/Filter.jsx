import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setValueFilterTicket, switchFilterAll } from '../../store/ticketsList';

import Styles from './Filter.module.scss';

const Filter = () => {
const [checkedAll, setCheckedAll] = useState(true);
const [checkedFilters, setCheckedFilters] = useState([true, true, true, true]);

const dispatch = useDispatch();

useEffect(() => {
  const allChecked = checkedFilters.every((checkedFilter) => checkedFilter);
  setCheckedAll(allChecked);
}, [checkedFilters]);


const handleAllCheckboxChange = () => {
  const allChecked = checkedFilters.map(() => !checkedAll);
  setCheckedFilters(allChecked);
};



const handleCheckboxChange = (event, index) => {
  const updatedCheckedFilters = [...checkedFilters];

  if (event.target.id === "all") {
    const allChecked = event.target.checked;
    updatedCheckedFilters.fill(allChecked);
    setCheckedAll(allChecked);
  } else {
    updatedCheckedFilters[index] = event.target.checked;
    setCheckedAll(updatedCheckedFilters.every((checkedFilter) => checkedFilter));
  }
  
  setCheckedFilters(updatedCheckedFilters);
};

useEffect(() => {
  dispatch(switchFilterAll(checkedAll));
}, [dispatch, checkedAll]);

useEffect(() => {
  dispatch(setValueFilterTicket({ isChecked: checkedFilters[0], filterValue: 0 }));
}, [checkedFilters, dispatch]);

useEffect(() => {
  dispatch(setValueFilterTicket({ isChecked: checkedFilters[1], filterValue: 1 }));
}, [checkedFilters, dispatch]);

useEffect(() => {
  dispatch(setValueFilterTicket({ isChecked: checkedFilters[2], filterValue: 2 }));
}, [checkedFilters, dispatch]);

useEffect(() => {
  dispatch(setValueFilterTicket({ isChecked: checkedFilters[3], filterValue: 3 }));
}, [checkedFilters, dispatch]);

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
        onChange={handleAllCheckboxChange}
        />
        <label className={Styles.label} htmlFor="all">Все</label>
      </div>
      <div className={Styles.wrapper}>
        <input
        type="checkbox"
        id="no_transfers"
        name="no_transfers"
        className={Styles.checkbox}
        checked={checkedFilters[0]}
        onChange={(event) => handleCheckboxChange(event, 0)}
        />
        <label className={Styles.label} htmlFor="no_transfers">Без пересадок</label>
      </div>
      <div className={Styles.wrapper}>
        <input
        type="checkbox"
        id="one_transfer"
        name="one_transfer"
        className={Styles.checkbox}
        checked={checkedFilters[1]}
        onChange={(event) => handleCheckboxChange(event, 1)}
        />
        <label className={Styles.label} htmlFor="one_transfer">1 пересадка</label>
      </div>
      <div className={Styles.wrapper}>
        <input
        type="checkbox"
        id="two_transfers"
        name="two_transfers"
        className={Styles.checkbox}
        checked={checkedFilters[2]}
        onChange={(event) => handleCheckboxChange(event, 2)}
        />
        <label className={Styles.label} htmlFor="two_transfers">2 пересадки</label>
      </div>
      <div className={Styles.wrapper}>
        <input
        type="checkbox"
        id="three_transfers"
        name="three_transfers"
        className={Styles.checkbox}
        checked={checkedFilters[3]}
        onChange={(event) => handleCheckboxChange(event, 3)}
        />
        <label className={Styles.label} htmlFor="three_transfers">3 пересадки</label>
      </div>
    </div>
  );
};

export default Filter;