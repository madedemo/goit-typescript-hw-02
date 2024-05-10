import css from './SearchHeader.module.css'
import { FC } from 'react'

interface SearchHeaderProps {
  children: React.ReactNode
}

const SeacrchHeader: FC<SearchHeaderProps> = ({children}) => {
  return (
    <div className={css.searchHeader}>
      <div>
        <h1>Find Images</h1>
        {children}
      </div>
    </div>
  );
};


export default SeacrchHeader