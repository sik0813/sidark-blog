import React from 'react';
import Licenselist from 'components/Licenselist';
import { firebaseSet, getLicense } from 'shared/firebase.js';
import { Table, Row, Col } from 'reactstrap';

export default class License extends React.Component {
    constructor(props){
        super(props);
        firebaseSet();
        this.state = ({
          data: []
        })
    }

    componentDidMount() {
        getLicense()    
        .then(res => {
        this.setState({
            data: res.val()
        }
        )
        })
    }

    render() {    
    const list = this.state.data.map(
        info => (<Licenselist key={info.id} info={info}/>)
    );

    return (
      <div class="row justify-content-center">
        <div class= "w-50 align-self-center">
          <Row className="border-bottom border-dark p-2">
            <Col className="font-weight-bold col-md-1">#</Col>
            <Col className="font-weight-bold">자격증 이름</Col>
            <Col className="font-weight-bold">취득 날짜</Col>
            <Col className="font-weight-bold">취득 기관</Col>
          </Row>
           {list}
        </div>
      </div>
    );
    }
}