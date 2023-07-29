import React, { ReactElement } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme';
import styleSheet from './InputFieldStyles';
import { InputFieldTypes } from './InputFieldTypes';

/**
 *
 * @param {string} label - label of input feild
 * @param {string} placeHolder - placeHolder for input feild
 * @param {string} val - value for input feild
 * @param {(string)=>void} changeVal - function that change the input value input feild
 * @param {string} errors - errors for input feild
 * @param {boolean} touched - give boolean value
 * @param {boolean} edit - give boolean value of text is editable or not
 * @param {()=> void} onPressIn - function that call in focus on input field
 * @returns
 */
const InputField = ({
  label,
  placeHolder,
  val,
  changeVal,
  errors,
  touched,
  edit,
  onPressIn,
}: InputFieldTypes): ReactElement => {
  const theme = useTheme();
  const styles = styleSheet(theme);

  return (
    <View style={styles.inputFieldContainer}>
      <Text style={styles.inputFieldText}>{label}</Text>
      <TextInput
        value={val}
        editable={edit}
        onChangeText={changeVal}
        autoCapitalize="none"
        style={styles.inputField}
        placeholderTextColor={Colors.light.lightGrey}
        placeholder={placeHolder}
        autoCorrect={false}
        autoComplete="off"
        onPressIn={onPressIn}
      />
      {errors && touched && <Text style={styles.errorText}>{errors}</Text>}
    </View>
  );
};

export default InputField;
