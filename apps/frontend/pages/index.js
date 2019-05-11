import Header from "@debtcollective/header";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const links = [
  { href: "/admin/disputes", roles: ["admin"], text: "Admin" },
  { href: "/disputes/my", text: "My Disputes" },
  { href: "/", text: "Dispute Your Debt" },
  { href: "https://community.debtcollective.org", text: "Community" },
];

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Page = () => {
  return (
    <React.Fragment>
      <Header links={links} />
      <div>
        <Title>Working</Title>
        <Link href="/disputes/general">
          <a>General Dispute</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Page;
