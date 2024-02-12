export interface IUser {
  id: number;
  name: string;
}

export interface IinitialUserState {
  isLoading: boolean;
  error: string | null;
  user: IUser;
}
