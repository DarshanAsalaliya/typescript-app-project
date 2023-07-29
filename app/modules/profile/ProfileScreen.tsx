import { Pencil } from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { CustomHeader, InputField, OptionModal } from '../../components';
import {
  ButtonLabel,
  FormikString,
  ImageUrl,
  InputLabel,
  PlaceHolder,
} from '../../constant';
import { globalMetrics, moderateScale, verticalScale } from '../../theme';
import useProfile, { UseProfile } from './useProfile';

/**
 *
 * @returns - user profile screen there user can edit their detail
 */
const ProfileScreen = (): ReactElement => {
  const {
    styles,
    formik,
    userData,
    editable,
    onEdit,
    onOpenGallery,
    isVisible,
    modalVisible,
    onOpenCamera,
  }: UseProfile = useProfile();

  return (
    <>
      <View style={styles.container}>
        <CustomHeader />
        <KeyboardAvoidingView
          keyboardVerticalOffset={globalMetrics.isIos ? verticalScale(70) : 0}
          behavior={globalMetrics.isIos ? 'padding' : 'height'}>
          <ScrollView>
            <View style={styles.imageContainer}>
              <Avatar.Image
                source={{ uri: userData?.avatar ?? ImageUrl.profilePhoto }}
                size={moderateScale(150)}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={modalVisible}>
                <Pencil size={moderateScale(24)} />
              </TouchableOpacity>
            </View>
            <InputField
              label={InputLabel.first_name}
              placeHolder={PlaceHolder.first_name}
              val={formik.values.first_name}
              changeVal={formik.handleChange(FormikString.first_name)}
              errors={formik.errors.first_name}
              touched={formik.touched.first_name}
              edit={editable}
            />
            <InputField
              label={InputLabel.last_name}
              placeHolder={PlaceHolder.last_name}
              val={formik.values.last_name}
              changeVal={formik.handleChange(FormikString.last_name)}
              errors={formik.errors.last_name}
              touched={formik.touched.last_name}
              edit={editable}
            />
            <InputField
              label={InputLabel.email}
              placeHolder={PlaceHolder.email}
              val={formik.values.email}
              changeVal={formik.handleChange(FormikString.email)}
              errors={formik.errors.email}
              touched={formik.touched.email}
              edit={editable}
            />
            <Pressable
              style={styles.buttonView}
              onPress={editable ? formik.handleSubmit : onEdit}>
              <Text style={styles.buttonText}>
                {editable ? ButtonLabel.submit : ButtonLabel.edit}
              </Text>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      {isVisible && (
        <OptionModal
          isVisible={isVisible}
          onOpenGallery={onOpenGallery}
          onOpenCamera={onOpenCamera}
          modalVisible={modalVisible}
        />
      )}
    </>
  );
};

export default ProfileScreen;
