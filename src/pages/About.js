import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, Badge, Form, FormGroup } from 'reactstrap';

export default class About extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
        <Card>
          <CardImg className="rounded w-75 align-self-center" top width="100%" src="images/1.jpg" alt="Card image cap" />
        </Card>
        <CardBody>
          <h3><CardTitle>황영식</CardTitle></h3>
          <CardSubtitle>탄생일 1994. 08. 13 ~</CardSubtitle>
          <CardText>
            <Badge color="secondary">Developer</Badge>
          </CardText>
          <CardTitle>나의 기록</CardTitle>
          <h4><CardTitle>Work</CardTitle></h4>
          <h6><CardText>
            <Row>
              <Col sm="3">2019. 07. 12 ~              </Col><Col>파수닷컴</Col>
            </Row>
          </CardText></h6>
          <h4><CardTitle>Education</CardTitle></h4>
          <h6><CardText>
            <Row>
              <Col sm='3'>2014. 03. 03 ~             </Col><Col>동국대학교</Col>
            </Row>
            <Row>
              <Col sm='3'>2013. 03. 04 ~ 2013. 12. 20</Col><Col>정보통신기능대학교</Col>
            </Row>
            <Row>
              <Col sm='3'>2010. 03. 02 ~ 2013. 02. 07</Col><Col>초당고등학교</Col>
            </Row>
          </CardText></h6>
        </CardBody>
        </FormGroup>        
      </Form>
    );
  }
}