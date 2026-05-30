import type { IconButtonProps } from '@mui/material/IconButton';

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
  liked: boolean;
  saved: boolean;
}

export interface APIPostProps {
  id: number;
  title: string;
  body: string;
}

export interface FilteredPosts {
  likedPosts: any[];
  savedPosts: any[];
}

// export interface UserProps {
//   username: string;
// }

// export interface PostComponentProps {
//   post: PostProps;
//   users: UserProps[];
// }