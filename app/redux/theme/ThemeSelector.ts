import { RootStateType } from '../store';
import { Theme, ThemeStateType } from './ThemeInitial';

/**
 * type of selectors for all theme state
 */
type ThemeSelectorsTypes = {
  getTheme: (state: RootStateType) => ThemeStateType;
  getThemeSchema: (state: RootStateType) => Theme;
  getIsDefault: (state: RootStateType) => boolean;
};

/**
 * A types containing the selector for theme state
 */
const ThemeSelectors: ThemeSelectorsTypes = {
  getTheme: (state: RootStateType): ThemeStateType => state.ThemeReducer,
  getThemeSchema: (state: RootStateType): Theme => state.ThemeReducer.theme,
  getIsDefault: (state: RootStateType): boolean => state.ThemeReducer.isDefault,
};

export default ThemeSelectors;
