export class User {
  id?: string;
  name?: string;
  email?: string;
  status?: boolean;
  password?: string;
  confirmPassword?: string;
  confirmationToken?: string;
  salt?: string;
  createAt?: Date;
  updateAt?: Date;
}
