import React, { ReactElement } from 'react';
import { StyleProp, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { CommonString, ImageUrl, UserString } from '../../../../constant';
import { Theme } from '../../../../redux';
import { moderateScale } from '../../../../theme';
import { VideoTypes } from '../../VideoTypes';
import styleSheet from './VideoDetailStyle';

const VideoDetail = ({
  item,
  theme,
}: {
  item: VideoTypes;
  theme: Theme;
}): ReactElement => {
  const styles: StyleProp = styleSheet(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.videoTitle}>{item?.title ?? ''}</Text>
      <View style={styles.rowContainer}>
        <View style={styles.topViewDetailContainer}>
          <Text style={styles.subTitleText}>{CommonString.likeNumber}</Text>
          <Text style={styles.text}>{CommonString.like}</Text>
        </View>
        <View style={styles.topViewDetailContainer}>
          <Text style={styles.subTitleText}>{CommonString.viewNumber}</Text>
          <Text style={styles.text}>{CommonString.view}</Text>
        </View>
        <View style={styles.topViewDetailContainer}>
          <Text style={styles.subTitleText}>{CommonString.commentNumber}</Text>
          <Text style={styles.text}>{CommonString.comments}</Text>
        </View>
      </View>
      <View style={styles.devider} />
      <Text style={styles.description}>{item?.description ?? ''}</Text>
      <View style={styles.devider} />
      <View style={styles.channelContainer}>
        <Avatar.Image
          size={moderateScale(60)}
          source={{
            uri: ImageUrl.profilePhoto,
          }}
        />
        <View>
          <Text
            style={
              styles.title
            }>{`${UserString.first_name} ${UserString.last_name}`}</Text>
          <Text
            style={
              styles.subscribers
            }>{`${CommonString.followersNumber} ${CommonString.subscribers}`}</Text>
        </View>
        <View style={styles.subscribeView}>
          <Text style={styles.subscribe}>{CommonString.subscribe}</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoDetail;
