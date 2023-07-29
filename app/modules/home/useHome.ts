import { useEffect, useState } from 'react';
import { Keyboard, StyleProp } from 'react-native';
import { useTheme } from '../../hooks';
import {
  Theme,
  UserActions,
  UserSelectors,
  useAppDispach,
  useAppSelector,
} from '../../redux';
import { getUser } from '../../services';
import { UserTypes } from '../../types';
import styleSheet from './HomeScreenStyles';
import { UseHome } from './HomeTypes';

const useHome = (): UseHome => {
  const theme: Theme = useTheme();
  const styles: StyleProp = styleSheet(theme);
  const dispatch = useAppDispach();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (page < 3) {
      dispatch(getUser(page));
    } else {
      dispatch(UserActions.endList());
    }
  }, [page]);

  const { isLoading, isEndList, usersList } = useAppSelector(
    UserSelectors.getUsers,
  );
  const [users, setUsers] = useState<UserTypes[]>([]);

  useEffect(() => {
    setUsers(usersList);
  }, [usersList]);

  const searchUser = (text: string): void => {
    setSearch(text);
    const userFilter = usersList.filter(item => {
      const userName = (item.first_name + item.last_name).toUpperCase();
      const searchText = text.toUpperCase();
      return userName.includes(searchText);
    });
    setUsers(userFilter);
  };

  const onSearchBack = (): void => {
    setSearch('');
    searchUser('');
    Keyboard.dismiss();
  };

  const onSearchClear = (): void => {
    setSearch('');
    searchUser('');
  };

  const onEndReach = (): void => {
    setPage(pre => pre + 1);
  };

  const handleKeyboard = (): void => {
    Keyboard.dismiss();
  };

  return {
    isLoading,
    isEndList,
    onEndReach,
    styles,
    theme,
    searchUser,
    users,
    handleKeyboard,
    search,
    onSearchBack,
    onSearchClear,
  };
};

export default useHome;
