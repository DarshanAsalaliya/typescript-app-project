import { DotsThreeOutline } from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { CustomHeader } from '../../components';
import {
  ButtonLabel,
  CommonString,
  ImageUrl,
  Routes,
  UserString,
} from '../../constant';
import { Colors, moderateScale } from '../../theme';
import { navigationWithParam } from '../../utils';
import { UseVideoListTypes, VideoTypes } from './VideoTypes';
import { useVideoList } from './hooks';

const VideoScreen = (): ReactElement => {
  const { styles, theme, isLoading, videoList, onRefresh }: UseVideoListTypes =
    useVideoList();

  const renderVideoItem = ({ item }: { item: VideoTypes }): ReactElement => (
    <TouchableOpacity
      onPress={() => navigationWithParam(Routes.videoPlayer, { item: item })}
      style={styles.videoItemContainer}>
      <Image
        style={styles.thumbnail}
        source={{ uri: item?.thumb?.replace(/^http:/, 'https:') }}
      />
      <View style={styles.channelView}>
        <Text style={styles.title}>{item?.title ?? ''}</Text>
        <DotsThreeOutline
          color={Colors[theme].black}
          size={moderateScale(32)}
          weight="fill"
        />
      </View>
      <View style={styles.channelView}>
        <View style={styles.rowContainer}>
          <Avatar.Image
            source={{ uri: ImageUrl.profilePhoto }}
            size={moderateScale(52)}
          />
          <Text
            style={
              styles.channelName
            }>{`${UserString.first_name} ${UserString.last_name}`}</Text>
        </View>
        <View style={styles.buttonView}>
          <Text style={styles.subscribe}>{CommonString.subscribe}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomHeader />
      {isLoading ? (
        <ActivityIndicator color={Colors[theme].black} size="large" />
      ) : (
        <FlatList
          data={videoList}
          renderItem={renderVideoItem}
          keyExtractor={item => item?.title.toString()}
          ListEmptyComponent={
            <Button title={ButtonLabel.refresh} onPress={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default VideoScreen;
