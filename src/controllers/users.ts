import { Response, Request } from 'express';
import User from '../model/user';

let users = [
  new User(1, 'foo@example.com', 'foo', 'fooish'),
  new User(2, 'bar@example.com', 'bar', 'barish'),
];

const getAllUsers = async (req: Request, res: Response) => {
  res.send({ data: users });
};

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params; // todo: parse string to int
  const user = users.find((user: User) => user.id == userId);

  res.send({ data: user });
};

const createUser = async (req: Request, res: Response) => {
  const { email, firstName, lastName } = req.params;
  const userId = users[users.length].id + 1; // :D

  users = [...this.users, new User(userId, email, firstName, lastName)];
  res.status(204).send({});
};

export { getAllUsers, getUserById, createUser };
