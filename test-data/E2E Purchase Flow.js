const getTimestampEmail = (prefix = "user", domain = "test.com") => {
    return `${prefix}${Date.now()}@${domain}`;
};

module.exports = {
    Users: [
        {
            firstName: "Salma",
            lastName: "Hafiza",
            email: getTimestampEmail("salma"),
            password: "Test@1234",
            confirmPassword: "Test@1234",
        },
        {
            firstName: "Salma",
            lastName: "Hafiza",
            email: getTimestampEmail("salma"),
            password: "Test@5678",
            confirmPassword: "Test@5678",
        },
    ],
    loginData: {
        email: "sanma@gmail.com",
        password: "sama123"
    },
    Product: {
        category: "Computers",
        subCategory: "Notebooks",
        productName: "14.1-inch Laptop",
        productPrice: "1590.00"
    },

    BillingAddress: {
        firstName: "Test",
        lastName: "User",
        email: "billinguser@test.com",
        country: "Pakistan",
        state: "Other (Non US)",
        city: "Karachi",
        address1: "123 Street",
        zip: "74000",
        phone: "03001234567",
    },

    ShippingAddress: {
        firstName: "Test",
        lastName: "User",
        email: "shippinguser@test.com",
        country: "Pakistan",
        state: "Other (Non US)",
        city: "Karachi",
        address1: "123 Street",
        zip: "74000",
        phone: "03001234567",
    },
    creditCardDetails: {
        cardType: 'Visa',
        holderName: 'Hassan Mehmood',
        cardNumber: '4111111111111111',
        expireMonth: '12',
        expireYear: '2030',
        cardCode: '123'
    },
};
