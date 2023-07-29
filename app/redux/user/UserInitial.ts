import { UserTypes } from '../../types';

export interface UserStateType {
  usersList: UserTypes[];
  isLoading: boolean;
  isEndList: boolean;
  route: string;
}
