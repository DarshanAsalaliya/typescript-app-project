import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispach, RootStateType } from './store';

export const useAppDispach = () => useDispatch<AppDispach>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
