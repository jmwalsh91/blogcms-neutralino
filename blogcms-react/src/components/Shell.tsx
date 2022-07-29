import { AppShell, Navbar, Header } from '@mantine/core';
import React, { ReactNode, useContext } from 'react';
import { AuthContext } from '../services/AuthRequired';
import NavItems from './NavItems';

type Props = {
    children: ReactNode
}

export default function Shell({children}: Props ) {
const authUser = useContext(AuthContext)
  return (
    <AppShell
    
  
      header={<Header height="10vh" style={{display: 'flex', flexDirection: 'row'}} p="xs">BlogCMS 
      {authUser.user? <NavItems/> : <p>Please sign in</p>}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  );
}