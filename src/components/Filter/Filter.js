import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contacts/contacts-action';
import { getFilter } from '../../redux/contacts/contacts-selector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className={s.label}>
      <p className={s.contacts}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={e =>
            dispatch(updateFilter(e.target.value))
          }
        />
      </p>
    </label>
  );
};

export default Filter;
