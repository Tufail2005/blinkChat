// Define the shape of the User payload in your JWT
export interface JwtPayload {
  userId: string;
  userName: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
