import { useState} from 'react';
import css from './SearchBar.module.css';
import toast from "react-hot-toast";
import { FC } from 'react'

interface SearchBarProps {
  onSubmit: (query: string) => void

}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            toast.error('Please enter a search query');
          return;
        }
      onSubmit(query);
      setQuery('');
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  return (
      <form className={css.searchBar} onSubmit={handleSubmit}>
        <input
          type="text"
          className={css.searchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={css.searchButton} disabled={!query}>Search</button>
      </form>
  )
}

export default SearchBar