import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class Home extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron>        
        <h1 className="display-3">안녕하세요!</h1>
        <p className="lead">Sidark의 블로그입니다</p>
        <hr className="my-2" />
        <p>그냥 만들어 봤어요</p>
      </Jumbotron>
    </div>
    );
  }
}