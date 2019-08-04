import React from 'react';
import {
  Collapse,  Navbar,   NavbarToggler,
  NavbarBrand,  Nav,  NavItem, NavLink,
  UncontrolledDropdown,  DropdownToggle,
  DropdownMenu,  DropdownItem } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
    this.setState({
      tab: '1'
    })
  }
  
  toggle(tab) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Sidark의 블로그</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" pills>
              <NavItem>
                <NavLink href="./About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./Post">Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./License">License</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://github.com/sik0813">
                    GitHub
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}