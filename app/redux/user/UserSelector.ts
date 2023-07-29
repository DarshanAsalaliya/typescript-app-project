import { RootStateType } from '../store';
import { UserStateType } from './UserInitial';

/**
 * type of selectors for all theme state
 */
type UserSelectorsTypes = {
  getUsers: (state: RootStateType) => UserStateType;
  getIsLoading: (state: RootStateType) => boolean;
  getIsEndList: (state: RootStateType) => boolean;
  getRoute: (state: RootStateType) => string;
};

/**
 * A types containing the selectord for theme state
 */
const UserSelectors: UserSelectorsTypes = {
  getUsers: (state: RootStateType): UserStateType => state.UserReducer,
  getIsLoading: (state: RootStateType): boolean => state.UserReducer.isLoading,
  getIsEndList: (state: RootStateType): boolean => state.UserReducer.isEndList,
  getRoute: (state: RootStateType): string => state.UserReducer.route,
};

export default UserSelectors;
