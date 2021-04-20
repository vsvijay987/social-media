import React from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import nprogress from 'nprogress';
import Router from 'next/router';

function Layout(props) {

  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();
  

  return (
    <>
      <HeadTags />

      <Navbar />

      <Container style={{ paddingTop: "1rem" }} text>
        {props.children}
      </Container>
    </>
  );
}

export default Layout;
