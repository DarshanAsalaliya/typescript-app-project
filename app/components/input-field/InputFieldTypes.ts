export interface InputFieldTypes {
  label?: string;
  placeHolder: string;
  val: string | undefined;
  changeVal: (text: string) => void;
  errors?: string;
  touched?: boolean;
  edit?: boolean;
  onPressIn?: () => void;
}
