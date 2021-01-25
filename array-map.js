const ages = [12, 34, 69];

const newAge = ages.map((age) => {
    return age * 2;
});

const users = [
    {
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        firstName: 'Jack',
        lastName: 'Sparrow'
    },
    {
        firstName: 'Peter',
        lastName: 'Parker'
    }
];

const processUsers = (user) => {
    return user.firstName + ' ' + user.lastName;
};

const simplifiedUsers = users.map(processUsers);

const usersWithAges = users.map((user, index) => {
    user.age = ages[index];
    return user;
});


