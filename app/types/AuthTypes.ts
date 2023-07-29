export interface UserLoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: number | string;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string | undefined;
  token?: string;
}

export interface SingleUserTypes {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar?: string;
    support?: {
      url: string;
      text: string;
    };
  };
}
