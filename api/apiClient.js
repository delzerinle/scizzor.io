const SERVER_URL = "http://localhost:8081";

const registerBrand = (user, callback) => {
    fetch(`${SERVER_URL}/register-brand`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        callback(data);
    });
};

const registerCustomer = (user, callback) => {
    fetch(`${SERVER_URL}/register-brand`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        callback(data);
    });
};

const authenticateUser = (credentials, callback) => {
    console.log(credentials);
    fetch(`${SERVER_URL}/authenticate`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        callback(data);
    });
};

const resendVerificationEmail = (token, callback) => {
    fetch(`${SERVER_URL}/resendVerificationEmail?token=${token}`, {
        method: 'GET',
        header: {
            Accept: "application/json",
            "Content-Type": "application/json", 
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        callback(data);
    });
};

export default {
    registerBrand,
    registerCustomer,
    authenticateUser,
    resendVerificationEmail
};
