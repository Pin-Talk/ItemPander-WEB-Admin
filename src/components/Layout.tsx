import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Navbar = styled.nav``;

const Layout = ({ children }: Props) => {
  return (
    <section>
      <Navbar></Navbar>
      {children}
    </section>
  );
};
export default Layout;
