import React from "react";
import { AppShell, Navbar, Footer } from "@mantine/core";
import { HomePage } from "../../pages";
import { Header } from "..";

export interface Link {
  title: string;
  link: string;
}

const navLinks: Link[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Reservations",
    link: "/reservations",
  },
  {
    title: "Order Online",
    link: "/order-online",
  },
  {
    title: "Login",
    link: "/login",
  },
];
const Layout: React.FC<{ children: React.ReactNode }> = ({}) => {
  return (
    <AppShell
      padding="md"
      header={<Header navLinks={navLinks} />}
      footer={
        <Footer height={60} p="xs">
          {}
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <HomePage />
      {/* {children} */}
    </AppShell>
  );
};

export default Layout;
