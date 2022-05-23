let users = {
    "rwieruch@gmail.com": {
        firstName: "Robin",
        lastName: "Wieruch",
        email: "rwieruch@gmail.com",
        password: "gehsikdk",
        dob: { month: "April", day: "5", year: "1973" },
    },
    "ddavddis@gmail.com": {
        firstName: "Dave",
        lastName: "Davddis",
        email: "ddavddis@gmail.com",
        password: "gehsgfggrtrikdk",
        dob: { month: "December", day: "15", year: "1952" },
    },
};

export const createUser = ({ firstName, lastName, password, email, ...dob }) =>
    new Promise((resolve, reject) => {
        if (!firstName || !lastName || !password || !email || !dob) {
            reject(new Error("Not All Info Provide"));
        }

        if (users[email]) {
            reject(new Error("user already registered"));
        }
        const userURL = `/${firstName}${lastName}`;
        const newUser = {
            firstName,
            lastName,
            password,
            email,
            userURL: userURL,
            dob,
        };
        const userEmail = newUser.email;
        users = {...users, [userEmail]: newUser };
        setTimeout(() => resolve(users[userEmail]), 250);
    }).then((res) => res);

export const findUserByEmail = ({ email, password }) =>
    new Promise((resolve, reject) => {
        if (!users[email]) {
            reject(new Error("User not found"));
        }
        if (users[email].password !== password) {
            reject(new Error("Incorrect credentials"));
        }
        setTimeout(() => resolve(users[email]), 250);
    }).then((res) => res);