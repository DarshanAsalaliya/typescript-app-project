import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Linking } from 'react-native';
import { CommonString } from '../../../constant';
import { useTheme } from '../../../hooks';
import { HomeStackParamList } from '../../../navigation';
import { messageAlert } from '../../../utils';
import styleSheet from './UserDetailScreenStyle';
import { UseUserDetail } from './UserDetailTypes';

const useUserDetail = (): UseUserDetail => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  const route = useRoute<RouteProp<HomeStackParamList>>();
  const item = route?.params?.item;
  const [isVisible, setVisible] = useState(false);

  const modalVisible = (): void => {
    setVisible(!isVisible);
  };

  const sendMail = async (): Promise<void> => {
    try {
      await Linking.openURL('mailto:' + item?.email);
    } catch (e) {
      messageAlert(CommonString.emailNotSupport);
    }
  };

  const openDialer = async (): Promise<void> => {
    try {
      const telOpen = await Linking.canOpenURL(`tel:${CommonString.phone_no}`);
      if (telOpen) {
        await Linking.openURL('tel:' + CommonString.phone_no);
      }
    } catch (error) {
      messageAlert(CommonString.dialerNotSupport);
    }
  };

  return { theme, styles, item, isVisible, modalVisible, sendMail, openDialer };
};

export default useUserDetail;
