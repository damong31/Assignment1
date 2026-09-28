import { writeFileSync, readFileSync } from 'node:fs';

const users = [{ name: 'John Johnson', email: 'john.johnson@email.com' }];
const usersJson = JSON.stringify(users);

writeFileSync('backend/users.json', usersJson);

const readUserJson = readFileSync('backend/users.json');

const readUsers = JSON.parse(readUserJson);

console.log(readUsers);
