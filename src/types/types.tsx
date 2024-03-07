
export interface UserData {
  _id: string;
  name: string;
  email: string;
  userType?: string;
  profilePicture: string;
}

export interface AuthState {
  user: UserData | null;
  loading: boolean;
  error: string | null;
  userType: string | null;
}

export const authInitialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  userType: null,
};

export interface UserState {
  data: UserData | null;
  loading: boolean;
  error: string | null;
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface UserUpdateResponse {
  success: boolean;
  updatedUser?: UserData;
  message?: string;
}

export interface DeleteUserResponse {
  success: boolean;
  message?: string;
}

export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};