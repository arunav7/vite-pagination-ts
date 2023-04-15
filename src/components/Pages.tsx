import { Pagination } from '@mui/material';
import { usePagination } from '../hooks/usePagination';
import { Posts } from '../types';

type PagesPropsType = {
  data: Posts[];
};

const Pages: React.FC<PagesPropsType> = ({ data }): JSX.Element => {
  const { totalPages, endPageIndex, startPageIndex, displayPage } =
    usePagination(5, data.length);

  const displayPosts = data.slice(startPageIndex, endPageIndex + 1);

  return (
    <div>
      <h1>Posts</h1>
      {displayPosts.map(item => {
        return (
          <div key={item.id}>
            <h3>
              <span>{item.id}. </span>
              {item.title}
            </h3>
            <p>{item.body}</p>
          </div>
        );
      })}
      <Pagination
        style={{ marginLeft: '30rem' }}
        color="lime"
        count={totalPages}
        onChange={displayPage}
      />
    </div>
  );
};

export default Pages;
