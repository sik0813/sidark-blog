import React from 'react';

export default class Licenselist extends React.Component {
  static defaultProps = {
    info: {
      id: '#',
      name: '자격증 이름',
      year: '취득 날짜',
      org: '취득 기관'
    }
  }
  
  render() {
    const {
      id, name, year, org
    } = this.props.info;

    return (
      <div class="row border-bottom border-dark p-2">
        <div class="col-md-1">{id}</div>
        <div class="col">{name}</div>
        <div class="col">{year}</div>
        <div class="col">{org}</div>
      </div>
    );
  }
}