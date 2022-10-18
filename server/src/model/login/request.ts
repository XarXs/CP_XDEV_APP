export interface Request {
  body: ReqBody;
}

interface ReqBody {
  username: string;
  password: string;
}
