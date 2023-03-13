import React from "react";
import { Header, Container, Box, Group, List } from "@mantine/core";
import { Link } from "./layout";

interface HeaderProps {
  navLinks: Link[];
}

const _Header: React.FC<HeaderProps> = ({ navLinks }) => {
  return (
    <Header height={80} py="lg">
      <Container></Container>
    </Header>
  );
};

export default _Header;
