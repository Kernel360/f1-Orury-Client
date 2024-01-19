interface CookieSetOptions {
  path: string;
  expires: Date;
  maxAge: number;
  domain: string;
  secure: boolean;
  httpOnly: boolean;
  sameSite: boolean | 'none' | 'lax' | 'strict';
}

interface CookieGetOptions {
  doNotParse: boolean;
  doNotUpdate: boolean;
}

export interface SetCookieProps {
  name: string;
  value: any;
  options?: Partial<CookieSetOptions>;
}

export interface GetCookieProps {
  name: string;
  options?: Partial<CookieGetOptions>;
}
