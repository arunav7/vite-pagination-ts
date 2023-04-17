import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import { Pages, PostsPlaceholder } from './components';
import { Posts } from './types';

import './App.css';

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Array<Posts>>();

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
    <div className='App'>
      <Typography
        sx={{ color: 'lime.dark' }}
        variant='h2'
      >
        Posts
      </Typography>
      {data && data.length > 0 ? <Pages data={data} /> : <PostsPlaceholder />}
    </div>
  );
};

export default App;
