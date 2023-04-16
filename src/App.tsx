import { useState, useEffect } from 'react';
import { Skeleton, Stack, Typography } from '@mui/material';

import Pages from './components/Pages';
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
      {data && data.length > 0 ? (
        <Pages data={data} />
      ) : (
        <Stack
          spacing={2}
          sx={{ margin: 'auto', width: 'fit-content', alignItems: 'center' }}
        >
          <Skeleton
            animation='wave'
            variant='rounded'
            width={1000}
            height={100}
          />
          <Skeleton
            animation='wave'
            variant='rounded'
            width={1000}
            height={100}
          />
          <Skeleton
            animation='wave'
            variant='rounded'
            width={1000}
            height={100}
          />
          <Skeleton
            animation='wave'
            variant='rounded'
            width={1000}
            height={100}
          />
          <Skeleton
            animation='wave'
            variant='rounded'
            width={1000}
            height={100}
          />
          <Skeleton
            animation='wave'
            variant='rectangular'
            width={350}
            height={40}
          />
        </Stack>
      )}
    </div>
  );
};

export default App;
