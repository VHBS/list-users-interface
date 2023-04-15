import { PhotoType } from './photos';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  photo: PhotoType;
};
