import UserFinancialData from './UserFinancialData';

interface User {
    fullName: string
    username: string
    email: string
    financialData: UserFinancialData
}

export default User;