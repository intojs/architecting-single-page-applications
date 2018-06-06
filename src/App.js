// @flow
import React, {Component} from 'react';
import {Col, Container, Navbar, NavbarBrand, Row} from "reactstrap";

import {ArticleFormContainer} from "./components/ArticleFormContainer";
import {ArticleListContainer} from "./components/ArticleListContainer";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Articles</NavbarBrand>
        </Navbar>
        <Container>
          <Row>
            <Col md={{size: 6, offset: 3}}>
              <ArticleFormContainer/>
              <ArticleListContainer/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
