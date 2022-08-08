import { AppShell, Navbar, Header, ScrollArea, Text } from '@mantine/core';
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
    fixed={false}

      
      header={<Header height="2rem" style={{display: 'flex', flexDirection: 'row'}} p="xs">BlogCMS 
      {authUser.user? <NavItems/> : <Text>Please sign in</Text>}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <ScrollArea>
      {children}
      </ScrollArea>
    </AppShell>
  );
}