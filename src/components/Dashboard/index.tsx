import styled from 'styled-components';

import undrawLogo from '../../assets/undraw_Analytics_re_dkf8.svg';
import { user } from '../../mock/user';
import { Progressbar } from '../Progressbar/index';

const Container = styled.div`
    position: relative;
    margin-top: 50px;
    border-radius: 20px;
    height: 420px;
    background-color: #f7f7f7;
    padding: 50px;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 50px;
        width: 250px;
        height: 200px;
        background: url(${undrawLogo}) no-repeat;
        background-size: 100%;
    }
`;

const WelcomeTitle = styled.h2`
    padding: 0;
    margin: 0;
    color: #777;
    font-size: 28px;
    font-weight: 400;
`;

const ProgressbarWrapper = ({children}) => <div style={{ width: '50%' }}>{children}</div>

const ProgressbarLabel = styled.span`
    margin-top: 12px;
    font-size: 14px;
    color: #aaa;
    display: block;
    padding: 8px 0;
`

const Dashboard = (): any => {
    const firstName = user.fullName.split(' ')[0];

    return (
        <Container>
            <WelcomeTitle>Good to see you, {firstName}</WelcomeTitle>
            <ProgressbarLabel>Your progress to achieve your dreams:</ProgressbarLabel>
            <ProgressbarWrapper>
                <Progressbar progress={60} backgroundColor="#ddd" ></Progressbar>
            </ProgressbarWrapper>
        </Container>
    )
}

export default Dashboard;