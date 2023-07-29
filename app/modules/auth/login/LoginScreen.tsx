import React, { ReactElement } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleProp,
  Text,
  View,
} from 'react-native';
import { InputField } from '../../../components';
import {
  AuthString,
  FormikString,
  InputLabel,
  PlaceHolder,
} from '../../../constant';
import { globalMetrics } from '../../../theme';
import styleSheet from './LoginScreenStyles';
import { useLogin } from './hooks';
import { UseLoginType } from './LoginType';

const LoginScreen = (): ReactElement => {
  const { formik, theme, isLoading }: UseLoginType = useLogin();
  const styles: StyleProp = styleSheet(theme);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={globalMetrics.isIos ? 'padding' : 'height'}>
        <ScrollView>
          <Text style={styles.heading}>{AuthString.heyMsj}</Text>
          <Text style={styles.subHeading}>{AuthString.letsMsj}</Text>
          <Text style={styles.subHeading}>{AuthString.getStart}</Text>
          <View style={styles.fieldContainer}>
            <InputField
              label={InputLabel.email}
              placeHolder={PlaceHolder.email}
              val={formik.values.email}
              changeVal={formik.handleChange(FormikString.email)}
              errors={formik.errors.email}
              touched={formik.touched.email}
            />
            <InputField
              label={InputLabel.password}
              placeHolder={PlaceHolder.password}
              val={formik.values.password}
              changeVal={formik.handleChange(FormikString.password)}
              errors={formik.errors.password}
              touched={formik.touched.password}
            />
            {isLoading ? (
              <View style={styles.buttonView}>
                <ActivityIndicator />
              </View>
            ) : (
              <Pressable
                style={styles.buttonView}
                onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>{AuthString.signIn}</Text>
              </Pressable>
            )}
            <View style={styles.forgetView}>
              <Text style={styles.forgetText}>{AuthString.forgetPassword}</Text>
              <Text style={styles.resetText}>{AuthString.resetHere}</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.bottomView}>
        <Text style={styles.forgetText}>{AuthString.noAccount}</Text>
        <Text style={styles.resetText}>{AuthString.createNew}</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
