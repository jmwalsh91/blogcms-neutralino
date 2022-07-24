import { AppShell, Navbar, Header } from '@mantine/core';
import React, { ReactNode } from 'react';
import NavItems from './NavItems';

type Props = {
    children: ReactNode
}

export default function Shell({children}: Props ) {

  return (
    <AppShell
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs"> <NavItems/> </Navbar>}
      header={<Header height={60} p="xs">BlogCMS</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  );
}