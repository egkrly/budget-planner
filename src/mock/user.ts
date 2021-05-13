import User from '../model/User';

const user: User = {
    fullName: 'Király József',
    username: 'j.kiraly98',
    email: 'j.kiraly98@gmail.com',
    financialData: {
        income: 4500,
        incomeCurrency: 'EUR',
        spendings: {
            'Netflix': {
                value: 19,
                currency: 'EUR'
            },
            'Rent': {
                value: 800,
                currency: 'EUR',
            },
            'Splice': {
                value: 10,
                currency: 'EUR',
            },
            'Vodafone': {
                value: 80,
                currency: 'EUR',
            },
            'Electricity': {
                value: 65,
                currency: 'EUR',
            }
        }
    }
}

export { user }