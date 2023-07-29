import React, { ReactElement } from 'react';
import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Images } from '../../../assets';
import { CustomHeader } from '../../../components';
import {
  CommonString,
  DummyData,
  ImageUrl,
  InputLabel,
} from '../../../constant';
import { moderateScale } from '../../../theme';
import { UseUserDetail } from './UserDetailTypes';
import useUserDetail from './useUserdetail';

const UserDetailScreen = (): ReactElement => {
  const {
    styles,
    item,
    isVisible,
    modalVisible,
    sendMail,
    openDialer,
  }: UseUserDetail = useUserDetail();

  return (
    <>
      <View style={styles.container}>
        <CustomHeader backButton />
        <View>
          <Image
            style={styles.coverImage}
            source={Images.backgroundImage}
            resizeMode="cover"
          />
          <View style={styles.innerView}>
            <View style={styles.profileImageView}>
              <Pressable onPress={modalVisible}>
                <Avatar.Image
                  source={{ uri: item?.avatar ?? ImageUrl.blankUser }}
                  size={moderateScale(100)}
                />
              </Pressable>
            </View>
            <Text style={styles.titleText}>
              {`${item?.first_name ?? ''} ${item?.last_name ?? ''}`}
            </Text>

            <View style={styles.rowContainer}>
              <View style={styles.topViewDetailContainer}>
                <Text style={styles.subTitleText}>
                  {CommonString.postNumber}
                </Text>
                <Text style={styles.text}>{CommonString.post}</Text>
              </View>
              <View style={styles.topViewDetailContainer}>
                <Text style={styles.subTitleText}>
                  {CommonString.followingNumber}
                </Text>
                <Text style={styles.text}>{CommonString.following}</Text>
              </View>
              <View style={styles.topViewDetailContainer}>
                <Text style={styles.subTitleText}>
                  {CommonString.followersNumber}
                </Text>
                <Text style={styles.text}>{CommonString.followers}</Text>
              </View>
            </View>
            <View style={styles.bottomView}>
              <View style={styles.bottomViewDetailContainer}>
                <Text style={styles.text}>{InputLabel.first_name}</Text>
                <Text style={styles.subTitleText}>
                  {item?.first_name ?? ''}
                </Text>
              </View>
              <View style={styles.breakLine} />
              <View style={styles.bottomViewDetailContainer}>
                <Text style={styles.text}>{InputLabel.last_name}</Text>
                <Text style={styles.subTitleText}>{item?.last_name ?? ''}</Text>
              </View>
              <View style={styles.breakLine} />
              <View style={styles.bottomViewDetailContainer}>
                <Text style={styles.text}>{InputLabel.email}</Text>
                <TouchableOpacity onPress={sendMail}>
                  <Text style={styles.textColor}>{item?.email ?? ''}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.breakLine} />
              <View style={styles.bottomViewDetailContainer}>
                <Text style={styles.text}>{InputLabel.phone_no}</Text>
                <TouchableOpacity onPress={openDialer}>
                  <Text style={styles.textColor}>{DummyData.phone_no}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {isVisible && (
        <Modal transparent visible={isVisible}>
          <TouchableOpacity style={styles.modalView} onPress={modalVisible}>
            <Avatar.Image
              size={moderateScale(240)}
              source={{ uri: item?.avatar ?? '' }}
            />
          </TouchableOpacity>
        </Modal>
      )}
    </>
  );
};

export default UserDetailScreen;
