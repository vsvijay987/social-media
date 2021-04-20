import React from "react";
import { Container, Menu, Icon} from "semantic-ui-react";
import {useRouter} from 'next/router';
import Link from 'next/Link';


function Navbar() {

  const router = useRouter();
  const isActive = (route) => {
    return router.pathname === route
  }

  return <div>
    <Menu fluid borderless>
      <Container text>
        <Link href="/login">
          <Menu.Item header active={isActive('/login')}>
            <Icon size="large" name="sign in"/>
            Login
          </Menu.Item>
        </Link>
        <Link href="/signup">
          <Menu.Item header active={isActive('/signup')}>
            <Icon size="large" name="signup"/>
            Login
          </Menu.Item>
        </Link>
      </Container>

    </Menu>
  </div>;
}

export default Navbar;
