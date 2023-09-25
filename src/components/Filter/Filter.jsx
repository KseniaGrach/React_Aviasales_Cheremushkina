import React from 'react';

import './Filter.scss';

const Filter = () => (
  <div className="filter">
    <div className="title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
    <div className="wrapper">
      <input type="checkbox" className="checkbox" id="all" name="all" />
      <label className="label" htmlFor="all">Все</label>
    </div>
    <div className="wrapper">
      <input type="checkbox" className="checkbox" id="zero" name="zero" />
      <label className="label" htmlFor="zero">Без пересадок</label>
    </div>
    <div className="wrapper">
      <input type="checkbox" className="checkbox" id="one" name="one" />
      <label className="label" htmlFor="one">1 пересадка</label>
    </div>
    <div className="wrapper">
      <input type="checkbox" className="checkbox" id="two" name="two" />
      <label className="label" htmlFor="two">2 пересадки</label>
    </div>
    <div className="wrapper">
      <input type="checkbox" className="checkbox" id="three" name="three" />
      <label className="label" htmlFor="three">3 пересадки</label>
    </div>
  </div>
);

export default Filter;
