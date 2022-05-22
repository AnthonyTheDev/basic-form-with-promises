let users = {
    Robin: {
        firstName: "Robin",
        lastName: "Wieruch",
        email: "rwieruch@gmail.com",
        password: "gehsikdk",
        DOB: {},
    },
    Dave: {
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
        const newUser = { firstName, lastName, password, email, dob };
        const name = newUser.firstName;
        users = {...users, [name]: newUser };
        setTimeout(() => resolve(users), 250);
    }).then((res) => res);
};

export default createUser;