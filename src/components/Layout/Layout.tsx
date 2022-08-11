import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  AppShell,
  Box,
  Burger,
  Group,
  Header,
  Navbar,
  UnstyledButton,
  Stack,
  MediaQuery,
  ThemeIcon,
  Text,
} from '@mantine/core';
import { TablerIcon } from '@tabler/icons';

import Logo from 'assets/images/logo.webp';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle';

import { sidebarData } from './sidebarData';
import useStyles from './Layout.styles';

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  color: string;
  active?: boolean;
}

function NavbarLink({ icon: Icon, color, label, active }: NavbarLinkProps) {
  const { classes, cx } = useStyles();

  return (
    <UnstyledButton className={cx(classes.link, { [classes.active]: active })}>
      <Group>
        <ThemeIcon color={color} variant="light">
          <Icon stroke={1.5} size={16} />
        </ThemeIcon>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export const Sidebar = ({ isHidden }: { isHidden: boolean }) => {
  const { classes } = useStyles();
  const { pathname } = useRouter();

  return (
    <Navbar width={{ sm: 200, lg: 300 }} p="md" hidden={isHidden} hiddenBreakpoint="sm">
      <Navbar.Section grow mt="md">
        <Stack justify="center" spacing={0}>
          {sidebarData.map(({ path, label, ...rest }) => (
            <Link key={label} href={path} passHref>
              <a className={classes.navLink}>
                <NavbarLink {...rest} label={label} active={path === pathname} />
              </a>
            </Link>
          ))}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      navbar={<Sidebar isHidden={!isOpen} />}
      header={
        <Header className={classes.header} height={70} p="md">
          <Group align="center">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger opened={isOpen} onClick={() => setIsOpen((prev) => !prev)} size="sm" />
            </MediaQuery>
            <Group className={classes.headerItem} grow align="center" position="apart">
              <Image className={classes.logo} src={Logo} width={40} height={40} />
              <ColorSchemeToggle />
            </Group>
          </Group>
        </Header>
      }
    >
      <Box px="lg">{children}</Box>
    </AppShell>
  );
};
