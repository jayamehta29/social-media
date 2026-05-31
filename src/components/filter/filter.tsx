import { Button } from '@mui/material';
import './filter.css';

export default function Filter(props: any) {
  const { onFilterChange } = props;

  return (
    <div className="filter-container">
      {top100Films.map((option) => (
        <div className="filter-button" key={option}>
          <Button variant="contained" onClick={() => {
            onFilterChange(option);
          }}>
            {option}
          </Button>
        </div >
      ))
      }
    </div >

  )
}
const top100Films = ['bookmarked', 'liked', 'all'];
