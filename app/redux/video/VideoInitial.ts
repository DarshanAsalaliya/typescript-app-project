export interface VideoTypes {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

export interface VideoStateType {
  isLoading: boolean;
  videoList: VideoTypes[];
}

export const initialState: VideoStateType = {
  isLoading: false,
  videoList: [],
};
