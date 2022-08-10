import Image from 'next/image';
import React from 'react';
import { AppShell, Box, Navbar, Center, Tooltip, UnstyledButton, Stack } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';

import Logo from 'assets/images/logo.svg';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle';

import { sidebarData } from './sidebarData';
import useStyles from './Layout.styles';

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton className={cx(classes.link, { [classes.active]: active })} onClick={onClick}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export const Sidebar = () => {
  const { classes } = useStyles();

  return (
    <Navbar className={classes.navbar} width={{ base: 70 }} p="md">
      <Center>
        <Image src={Logo} width={30} height={30} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={4}>
          {sidebarData.map((link, index) => (
            <NavbarLink {...link} key={link.label} active={index === 0} />
          ))}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <ColorSchemeToggle />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <AppShell padding="md" navbar={<Sidebar />}>
    <Box px="lg">{children}</Box>
  </AppShell>
);
