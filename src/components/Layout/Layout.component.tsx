import React, {memo} from 'react';

import {Card, Container, SideBar, Heading, SideBarHeading} from "./styles";
import {ComponentProps} from "./types";

const Layout = ({mainContent, sideContent, mainHeading, sideHeading}: ComponentProps) => {
  return (
    <Container>
      <SideBar>
        <SideBarHeading>{sideHeading}</SideBarHeading>
        {sideContent}
      </SideBar>
      <Card>
        <Heading>{mainHeading}</Heading>
        {mainContent}
      </Card>
    </Container>
  )
};

export default memo(Layout);
