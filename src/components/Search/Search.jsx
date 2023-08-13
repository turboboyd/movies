import React, { useState } from 'react';
import css from './Search.module.css';

export default function Search(props) {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    console.log('handleInput: ', query);

    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.searchName({
      query,
    });
    setQuery('');
  };

  return (
    // <div className={css.container}>
    //   <div className={css.cntr}>
    //     <div className={css.cntr_innr}>
          <form className={css.searchForm} onSubmit={handleSubmit}>
            <label
              className={`${css.search} ${query.length > 1 ? css.active : ''}`}
            >
              <input
                value={query}
                onChange={handleInput}
                id="inpt_search"
                type="text"
              />
            </label>
          </form>
    //     </div>
    //   </div>
    // </div>
  );
}
