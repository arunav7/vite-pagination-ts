import { Skeleton, Stack } from '@mui/material';

const PostsPlaceholder: React.FC = (): JSX.Element => (
  <Stack
    spacing={2}
    sx={{ margin: 'auto', width: 'fit-content', alignItems: 'center' }}
  >
    {[...Array(5)].map((_, index) => (
      <Skeleton
        key={index}
        animation='wave'
        variant='rounded'
        height={100}
        width={1000}
      />
    ))}
    <Skeleton
      animation='wave'
      variant='rectangular'
      width={350}
      height={40}
    />
  </Stack>
);

export default PostsPlaceholder;
