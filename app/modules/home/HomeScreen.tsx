import { ArrowLeft, MagnifyingGlass, X } from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CustomHeader, NoResult, UserCard } from '../../components';
import { PlaceHolder, UserString } from '../../constant';
import { Colors, moderateScale } from '../../theme';
import { UserTypes } from '../../types';
import useHome from './useHome';

/**
 *
 * @param {UserTypes} item - user card function
 * @returns
 */
const userCard = ({ item }: { item: UserTypes }) => {
  return <UserCard item={item} />;
};

/**
 *
 * @returns - Home screen that have user list
 */
const HomeScreen = (): ReactElement => {
  const {
    isLoading,
    isEndList,
    onEndReach,
    styles,
    theme,
    searchUser,
    users,
    handleKeyboard,
    search,
    onSearchClear,
    onSearchBack,
  } = useHome();

  const userLoad = (isLoading: boolean, isEndList: boolean) => {
    if (!search) {
      if (!isLoading && isEndList) {
        return <Text style={styles.fotterText}>{UserString.noMoreUser}</Text>;
      } else if (isLoading) {
        return <ActivityIndicator />;
      } else {
        return null;
      }
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader notification={true} />
      <View style={styles.searchContainer}>
        {search ? (
          <TouchableOpacity onPress={onSearchBack}>
            <ArrowLeft size={moderateScale(24)} color={Colors[theme].black} />
          </TouchableOpacity>
        ) : (
          <MagnifyingGlass
            size={moderateScale(24)}
            color={Colors[theme].black}
          />
        )}
        <TextInput
          value={search}
          style={styles.textInput}
          placeholder={PlaceHolder.search}
          placeholderTextColor={Colors[theme].lightGrey}
          onChangeText={searchUser}
          autoComplete="off"
          autoCorrect={false}
        />
        {search && (
          <TouchableOpacity onPress={onSearchClear}>
            <X size={moderateScale(24)} color={Colors[theme].black} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={users}
        renderItem={userCard}
        onEndReached={onEndReach}
        ListEmptyComponent={<NoResult />}
        onScroll={handleKeyboard}
        ListFooterComponent={() => userLoad(isLoading, isEndList)}
      />
    </View>
  );
};

export default HomeScreen;
