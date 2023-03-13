import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import RootRoute from "src/routes";
import { NotificationsProvider } from "@mantine/notifications";
import { StateContextProvider } from "src/contexts";
import { AppShell } from "@mantine/core";
import { Header, Footer, Navbar } from "src/components";
import { StateContext } from "src/contexts";
import {
  IconBuildingWarehouse,
  IconHome,
  IconInfoSquareRounded,
  IconLogin,
  IconNotebook,
  IconTruckDelivery,
  TablerIcon,
} from "@tabler/icons";
import React from "react";

const navLinks = [
  {
    icon: IconHome,
    title: "Home",
    link: "/",
  },
  {
    icon: IconInfoSquareRounded,
    title: "About",
    link: "/about",
  },
  {
    icon: IconNotebook,
    title: "Menu",
    link: "/menu",
  },
  {
    icon: IconBuildingWarehouse,
    title: "Reservations",
    link: "/reservations",
  },
  {
    icon: IconTruckDelivery,
    title: "Order Online",
    link: "/order-online",
  },
  {
    icon: IconLogin,
    title: "Login",
    link: "/login",
  },
];

const App = () => {
  const { openMenu } = React.useContext(StateContext);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <StateContextProvider>
        <NotificationsProvider>
          <Router>
            <AppShell
              header={<Header navLinks={navLinks} />}
              navbar={<Navbar open={openMenu} navLinks={navLinks} />}
              footer={<Footer />}
              styles={{ main: { paddingLeft: 0, paddingRight: 0 } }}
            >
              <RootRoute />
            </AppShell>
          </Router>
        </NotificationsProvider>
      </StateContextProvider>
    </MantineProvider>
  );
};

export default App;
