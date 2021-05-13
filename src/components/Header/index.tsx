import { Theme } from '../Theme';

const Header = () : any => {
    const navItems = [
        { url: '#', label: 'Settings' },
        { url: '#', label: 'Logout' },
    ];

    return (
        <header style={{
            height: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: '32px',
            backgroundColor: Theme.Header.BackgroundColor
        }}>
            <span style={{
                fontWeight: 100,
                fontSize: '32px',
                color: Theme.Header.Logo.Color
            }}>B U D G E T</span>
            <nav>
                {navItems.map(el => (
                    <a
                        href={el.url}
                        style={{
                            fontSize: '16px',
                            textDecoration: 'none',
                            marginLeft: '22px',
                            fontWeight: 300,
                            color: Theme.Header.Nav.NavItem.Color
                        }}
                    >{el.label}</a>
                ))}
            </nav>
        </header>
    );
}

export default Header;