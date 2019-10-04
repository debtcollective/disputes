import { ApolloProvider } from "@apollo/react-hooks";
import CssBaseline from "@material-ui/core/CssBaseline";
import getPageContext from "../lib/getPageContext";
import JssProvider from "react-jss/lib/JssProvider";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Normalize } from "styled-normalize";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";
import App, { Container } from "next/app";

// next.js custom App - https://nextjs.org/docs/#custom-app
class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <React.Fragment>
        <Normalize />
        <Container>
          <ApolloProvider client={apolloClient}>
            <JssProvider
              registry={this.pageContext.sheetsRegistry}
              generateClassName={this.pageContext.generateClassName}
            >
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <MuiThemeProvider
                  theme={this.pageContext.theme}
                  sheetsManager={this.pageContext.sheetsManager}
                >
                  <CssBaseline />
                  <Component pageContext={this.pageContext} {...pageProps} />
                </MuiThemeProvider>
              </MuiPickersUtilsProvider>
            </JssProvider>
          </ApolloProvider>
        </Container>
      </React.Fragment>
    );
  }
}

export default withApolloClient(MyApp);
