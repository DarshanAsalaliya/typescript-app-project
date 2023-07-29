import { useEffect } from 'react';
import { useTheme } from '../../../hooks';
import {
  Theme,
  VideoSelectors,
  useAppDispach,
  useAppSelector,
} from '../../../redux';
import { getVideoList } from '../../../services';
import styleSheet from '../VideoListScreenStyle';
import { UseVideoListTypes } from '../VideoTypes';

const useVideoList = (): UseVideoListTypes => {
  const dispatch = useAppDispach();
  const { isLoading, videoList } = useAppSelector(VideoSelectors.getVideo);

  useEffect(() => {
    dispatch(getVideoList());
  }, []);

  const onRefresh = () => {
    dispatch(getVideoList());
  };

  const theme: Theme = useTheme();
  const styles = styleSheet(theme);

  return { theme, styles, isLoading, videoList, onRefresh };
};

export default useVideoList;
