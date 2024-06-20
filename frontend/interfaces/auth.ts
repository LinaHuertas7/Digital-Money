export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface State {
  [key: string]: string | number;
}

export interface Error {
  response?: {
    status: number;
  };
}
