import styled from 'styled-components';

import { Theme } from '../Theme';

const HeaderElement = styled.header`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 32px;
    background-color: ${Theme.Header.BackgroundColor};
`;

const LogoSpan = styled.span`
    font-weight: 100;
    font-size: 32px;
    color: ${Theme.Header.Logo.Color};
`;

const NavLink = styled.a`
    font-size: 16px;
    text-decoration: none;
    margin-left: 22px;
    font-weight: 300;
    color: ${Theme.Header.Nav.NavItem.Color};
`;

const Header = () : any => {
    const navItems = [
        { url: '#', label: 'Settings' },
        { url: '#', label: 'Logout' },
    ];

    return (
        <HeaderElement>
            <LogoSpan>B U D G E T</LogoSpan>
            <nav>
                {navItems.map((el, i) => (
                    <NavLink
                        href={el.url}
                        key={i}
                    >{el.label}</NavLink>
                ))}
            </nav>
        </HeaderElement>
    );
}

export default Header;