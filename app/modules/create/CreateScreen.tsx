import { Camera } from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import {
  Keyboard,
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
import useCreate, { UseCreate } from './useCreate';

/**
 *
 * @returns - create user screen
 */
const CreateScreen = (): ReactElement => {
  const {
    styles,
    formik,
    onOpenCamera,
    onOpenGallery,
    modalVisible,
    imageUrl,
    isVisible,
  }: UseCreate = useCreate();

  return (
    <>
      <View style={styles.container}>
        <CustomHeader />
        <KeyboardAvoidingView
          keyboardVerticalOffset={Keyboard.isVisible() ? verticalScale(70) : 0}
          behavior={globalMetrics.isIos ? 'padding' : 'height'}>
          <ScrollView>
            <View style={styles.imageContainer}>
              <Avatar.Image
                source={{
                  uri: imageUrl ?? ImageUrl.blankUser,
                }}
                size={moderateScale(150)}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={modalVisible}>
                <Camera size={moderateScale(24)} />
              </TouchableOpacity>
            </View>
            <InputField
              label={InputLabel.first_name}
              placeHolder={PlaceHolder.first_name}
              val={formik.values.first_name}
              changeVal={formik.handleChange(FormikString.first_name)}
              errors={formik.errors.first_name}
              touched={formik.touched.first_name}
            />
            <InputField
              label={InputLabel.last_name}
              placeHolder={PlaceHolder.last_name}
              val={formik.values.last_name}
              changeVal={formik.handleChange(FormikString.last_name)}
              errors={formik.errors.last_name}
              touched={formik.touched.last_name}
            />
            <InputField
              label={InputLabel.email}
              placeHolder={PlaceHolder.email}
              val={formik.values.email}
              changeVal={formik.handleChange(FormikString.email)}
              errors={formik.errors.email}
              touched={formik.touched.email}
            />
            <Pressable style={styles.buttonView} onPress={formik.handleSubmit}>
              <Text style={styles.buttonText}>{ButtonLabel.addUser}</Text>
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

export default CreateScreen;
