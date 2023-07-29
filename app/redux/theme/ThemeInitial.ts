/**
 * type of theme
 */
export type Theme = 'light' | 'dark';

/**
 * type of theme reducer state
 */
export interface ThemeStateType {
  theme: Theme;
  isDefault: boolean;
  isFirst: boolean;
}

export const initialState: ThemeStateType = {
  theme: 'light',
  isDefault: true,
  isFirst: true,
};
