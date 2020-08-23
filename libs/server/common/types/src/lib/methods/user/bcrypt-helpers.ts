import {
  genSalt, hash
} from 'bcrypt';

export const generateSalt = (): Promise<string> => genSalt();

export const hashPassword = (password: string, salt: string): Promise<string> => hash(password, salt);
