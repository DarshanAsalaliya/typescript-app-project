import React, { ReactElement } from 'react';
import { Modal, StyleProp, Text, TouchableOpacity, View } from 'react-native';
import { ButtonLabel } from '../../constant';
import { useTheme } from '../../hooks';
import { Theme } from '../../redux';
import styleSheet from './OptionModalStyle';
import { OptionModalTypes } from './OptionModalTypes';

const OptionModal = ({
  isVisible,
  onOpenGallery,
  onOpenCamera,
  modalVisible,
}: OptionModalTypes): ReactElement => {
  const theme: Theme = useTheme();
  const styles: StyleProp = styleSheet(theme);

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.modalButtonView}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onOpenGallery}>
            <Text style={styles.modalButtonText}>
              {ButtonLabel.openGallery}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onOpenCamera}>
            <Text style={styles.modalButtonText}>{ButtonLabel.openCamera}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={modalVisible}>
            <Text style={styles.modalButtonText}>{ButtonLabel.close}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OptionModal;
