import React from 'react';
import { Table } from 'reactstrap';

export default class Post extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
      <Table className="table table-striped table-bordered table-hover w-75 align-self-center">
        <thead>
          <tr>
            <th width="10%">번호</th>
            <th width="50%">제목</th>
            <th width="10%">작성자</th>
            <th width="20%">작성일</th>
            <th width="10%">조회</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}