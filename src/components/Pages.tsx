import { Box, Pagination } from '@mui/material';
import { usePagination } from '../hooks/usePagination';
import { Posts } from '../types';

import './Pages.css';

type PagesPropsType = {
  data: Array<Posts>;
};

const Pages: React.FC<PagesPropsType> = ({ data }): JSX.Element => {
  const { totalPages, endPageIndex, startPageIndex, displayPage } =
    usePagination(5, data.length);

  const displayPosts = data.slice(startPageIndex, endPageIndex);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        alignItems: 'center',
      }}
    >
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
        sx={{
          pb: '2rem',
        }}
        color='lime'
        count={totalPages}
        onChange={displayPage}
      />
    </Box>
  );
};

export default Pages;
