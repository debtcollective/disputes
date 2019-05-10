import { ApolloProvider } from "react-apollo";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { Normalize } from "styled-normalize";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";
import App, { Container } from "next/app";

// next.js custom App - https://nextjs.org/docs/#custom-app
class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <React.Fragment>
        <Normalize />
        <Container>
          <ApolloProvider client={apolloClient}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Component {...pageProps} />
            </MuiPickersUtilsProvider>
          </ApolloProvider>
        </Container>
      </React.Fragment>
    );
  }
}

export default withApolloClient(MyApp);
