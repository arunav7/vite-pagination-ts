import { useState, useEffect } from 'react';

import Pages from './components/Pages';
import { Posts } from './types';

import './App.css';

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Posts[]>([]);
  //getting posts
  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    paginationFunc();
  }, []);
  return (
    <div className='App'>
      {data && data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
