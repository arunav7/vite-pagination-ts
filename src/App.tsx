import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';

import Pages from './components/Pages';
import { Posts } from './types';

import './App.css';

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Posts[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setData(data as Posts[]);
        }, 3000);
      });
  }, []);

  return (
    <div className="App">
      {data && data.length > 0 ? (
        <Pages data={data} />
      ) : (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={900}
          height={600}
        />
      )}
    </div>
  );
};

export default App;
