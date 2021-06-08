// primitive
const title = "My First App";
const verson = 1.0;
const production = false;

let username = '';
let score = 0;
let isVip = true;


// grouping / compound / complex
const array = [];
const object = {};

const users = [];

const user0 = {
    firstName: 'James',
    lastName: 'James',
    isVip: true
};

const user1 = {
    firstName: 'Joan',
    lastNames: 'Jones',
    isVip: true
};

const user2 = {
    firstName: 'Jimmy',
    lastName: 'James',
    isVip: true
};

const user3 = user0;
users.push(user0);
users.push(user1);
users.push(user2);
users.push(user3);

console.log(users)