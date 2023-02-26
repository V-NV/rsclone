export interface IRegisterData {
  email: string;
  name: string;
  password: string;
}

export type TLoginUser = Omit<IRegisterData, "name">;
export interface IUserPost {
  imgUrl?: string;
  title?: string;
  post?: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
  username?: string;
}

export type TUserNewPost = Omit<
  IUserPost,
  "createdAt" | "updatedAt" | "_id" | "username"
>;
export type TUserPostSend = Omit<IUserPost, "createdAt" | "updatedAt" | "_id">;

export interface IWebStorageUserData {
  userPost: IUserPost[] | undefined;
}
export interface IGetRegisterData extends IRegisterData {
  _id: string;
  createdAt: string;
  updatedAt: string;
  role: string;
}

export interface IToken {
  username: string;
  accessToken: string;
  refreshToken: string;
}

export interface IWebStorage {
  user_storage: {
    username: string;
    user_session: string;
    user_login: boolean;
  };
  userPost?: IWebStorageUserData | undefined;
}
