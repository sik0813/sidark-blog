import React from 'react';
import { Table } from 'reactstrap';

export default class History extends React.Component {
  render() {
    return (
      <Table bordered size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>year</th>
            <th>Name</th>
            <th>달성</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}