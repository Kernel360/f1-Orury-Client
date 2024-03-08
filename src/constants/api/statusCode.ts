export const STATUS_CODE = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
} as const;

export const ERROR_CODE = {
  invalidEmail: 900,
  noAccount: 910,
  haveAnotherAccount: 920,
  invalidAccessToken: 990,
  invalidRefreshToken: 999,
} as const;
