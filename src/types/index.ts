export interface ITokenState {
  token: string | null;
  user: any;
}

export interface IRegisterState {
  name: string;
  email: string;
  password: string;
}

export interface IRegister {
    name: string,
    email: string,
    password: string
}

export interface IOtp {
    email: string;
    code: string | number;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IEvent {
    id: string,
    event_name: string,
    number_of_guests: number,
    number_of_waiters: number,
    date: string
}
