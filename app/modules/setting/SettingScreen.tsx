import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import {
  CircleHalf,
  FileText,
  Key,
  ShieldCheck,
  SignOut,
} from 'phosphor-react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import React, { ReactElement } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { CustomHeader, InputField } from '../../components';
import {
  ButtonLabel,
  FormikString,
  InputLabel,
  PlaceHolder,
  darkButtonOption,
} from '../../constant';
import { Colors, moderateScale } from '../../theme';
import {
  SettingCardTypes,
  UseChangePassword,
  UseSettingType,
} from './SettingTypes';
import { SettingCard } from './components';
import { useChangePassword, useSetting } from './hooks';

const settingCardRender = ({ item }: SettingCardTypes): ReactElement => (
  <SettingCard item={item} />
);

const SettingScreen = (): ReactElement => {
  const {
    styles,
    logOut,
    openWeb,
    theme,
    initialValue,
    themeChange,
    bottomSheetRef,
    snapPoints,
    handleBottomSheet,
  }: UseSettingType = useSetting();

  const {
    bottomSheetPasswordRef,
    formik,
    handlePasswordBottomSheet,
    snapPointsPassword,
    expandPasswordBottomsheet,
    keyBoardDismiss,
  }: UseChangePassword = useChangePassword();

  const settingList = [
    {
      settingText: ButtonLabel.changePassword,
      icon: <Key size={moderateScale(28)} color={Colors[theme].black} />,
      onPress: handlePasswordBottomSheet,
    },
    {
      settingText: ButtonLabel.changeTheme,
      icon: (
        <CircleHalf
          size={moderateScale(28)}
          color={Colors[theme].black}
          weight="fill"
        />
      ),
      onPress: handleBottomSheet,
    },
    {
      settingText: ButtonLabel.term,
      icon: <FileText size={moderateScale(28)} color={Colors[theme].black} />,
      onPress: openWeb,
    },
    {
      settingText: ButtonLabel.privacy,
      icon: (
        <ShieldCheck size={moderateScale(28)} color={Colors[theme].black} />
      ),
      onPress: openWeb,
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <CustomHeader headerText={ButtonLabel.setting} />
        <FlatList data={settingList} renderItem={settingCardRender} />
        <SettingCard
          item={{
            settingText: ButtonLabel.signOut,
            icon: (
              <SignOut size={moderateScale(28)} color={Colors[theme].black} />
            ),
            onPress: logOut,
          }}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={styles.bottomSheetBackground}
        style={styles.bottomSheetContainer}>
        <View style={styles.radioButtonView}>
          <RadioButtonRN
            selectedBtn={({ value }: { value: string }) => themeChange(value)}
            data={darkButtonOption}
            initial={initialValue}
            activeColor={Colors[theme]?.orange}
            textColor={Colors[theme]?.black}
            boxDeactiveBgColor={Colors[theme]?.backgroundColor}
            textStyle={styles.radioText}
            boxStyle={styles.radioBox}
          />
        </View>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetPasswordRef}
        index={-1}
        onClose={keyBoardDismiss}
        snapPoints={snapPointsPassword}
        enablePanDownToClose={true}
        backgroundStyle={styles.bottomSheetBackground}
        style={styles.bottomSheetContainer}>
        <BottomSheetScrollView>
          <View style={styles.radioButtonView}>
            <InputField
              val={formik.values.currentPassword}
              changeVal={formik.handleChange(FormikString.currentPassword)}
              label={InputLabel.currentPassword}
              placeHolder={PlaceHolder.currentPassword}
              errors={formik.errors.currentPassword}
              touched={formik.touched.currentPassword}
              onPressIn={expandPasswordBottomsheet}
            />
            <InputField
              val={formik.values.newPassword}
              changeVal={formik.handleChange(FormikString.newPassword)}
              label={InputLabel.newPassword}
              placeHolder={PlaceHolder.newPassword}
              errors={formik.errors.newPassword}
              touched={formik.touched.newPassword}
              onPressIn={expandPasswordBottomsheet}
            />
            <InputField
              val={formik.values.reEnterNewPassword}
              changeVal={formik.handleChange(FormikString.reEnterNewPassword)}
              label={InputLabel.reEnter}
              placeHolder={InputLabel.reEnter}
              errors={formik.errors.reEnterNewPassword}
              touched={formik.touched.reEnterNewPassword}
              onPressIn={expandPasswordBottomsheet}
            />
            <Pressable style={styles.buttonView} onPress={formik.handleSubmit}>
              <Text style={styles.buttonText}>{ButtonLabel.submit}</Text>
            </Pressable>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

export default SettingScreen;
