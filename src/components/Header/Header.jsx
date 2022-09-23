import { NavItem, List, HeaderWrp } from './Header.styled';
import Container from 'components/Container';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <HeaderWrp>
      <Container>
        <nav>
          <List>
            {navItems.map(({ href, text }) => (
              <li key={href}>
                <NavItem to={href} end>
                  {text}
                </NavItem>
              </li>
            ))}
          </List>
        </nav>
      </Container>
    </HeaderWrp>
  );
};

export default Header;
