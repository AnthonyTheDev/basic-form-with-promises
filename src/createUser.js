let users = {
    "rwieruch@gmail.com": {
        firstName: "Robin",
        lastName: "Wieruch",
        email: "rwieruch@gmail.com",
        password: "gehsikdk",
        DOB: {},
    },
    "ddavddis@gmail.com": {
        firstName: "Dave",
        lastName: "Davddis",
        email: "ddavddis@gmail.com",
        password: "gehsgfggrtrikdk",
        DOB: {},
    },
};

const createUser = ({ firstName, lastName, password, email, ...dob }) => {
    return new Promise((resolve, reject) => {
        if (!firstName || !lastName || !password || !email || !dob) {
            reject(new Error("Not All Info Provide"));
        }

        if (users[email]) {
            reject(new Error("user already registered"));
        }
        const newUser = { firstName, lastName, password, email, dob };
        const userEmail = newUser.email;
        users = {...users, [userEmail]: newUser };
        setTimeout(() => resolve(users[userEmail]), 250);
    }).then((res) => res);
};

export default createUser;