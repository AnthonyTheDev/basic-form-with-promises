export const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const buildDaysOfMonth = (month) => {
    switch (month) {
        case monthsOfYear[0]:
            return 31;
        case monthsOfYear[1]:
            return 28;
        case monthsOfYear[2]:
            return 31;
        case monthsOfYear[4]:
            return 31;
        case monthsOfYear[7]:
            return 31;
        case monthsOfYear[9]:
            return 31;
        case monthsOfYear[11]:
            return 31;
        default:
            return 30;
    }
};