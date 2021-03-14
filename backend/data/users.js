import bcrypt from 'bcryptjs';

const users = [
  {
    firstName: 'Jamo',
    lastName: 'Squeeze',
    email: 'admin@test.com',
    password: bcrypt.hashSync('Anker98!', 10),
    isAdmin: true,
  },
  {
    firstName: 'C',
    lastName: 'Bear',
    email: 'cbear@test.com',
    password: bcrypt.hashSync('Anker98!', 10),
  },
  {
    firstName: 'D',
    lastName: 'Nice',
    email: 'dnice@test.com',
    password: bcrypt.hashSync('Anker98!', 10),
  },
];

export default users;
