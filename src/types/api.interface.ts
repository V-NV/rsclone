export interface IRegisterData {
  email: string;
  name: string;
  password: string;
}

export interface IUserPost {
  imgUrl: string;
  title: string;
  post: string;
}

export interface IGetRegisterData extends IRegisterData {
  _id: string;
  createdAt: string;
  updatedAt: string;
  role: string;
}
