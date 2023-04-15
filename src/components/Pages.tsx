import Pagination from '@mui/material/Pagination';
import { usePagination } from '../hooks/usePagination';
import { Posts } from '../types';

type PagesPropsType = {
  data: Posts[];
};

const Pages: React.FC<PagesPropsType> = ({ data }): JSX.Element => {
  const { totalPages, endPageIndex, startPageIndex, displayPage } =
    usePagination(5, data.length);

  const displayPosts = data.slice(startPageIndex, endPageIndex);

  return (
    <div>
      <h1>User Posts</h1>
      {displayPosts.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        );
      })}
      <Pagination
        style={{ marginLeft: '30rem' }}
        color='lime'
        count={totalPages}
        onChange={displayPage}
      />
    </div>
  );
};

export default Pages;
