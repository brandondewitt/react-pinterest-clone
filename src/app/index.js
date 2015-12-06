import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav} from 'react-bootstrap';

import './style.styl';

export class App extends Component {
  render() {
    const links = [
      { display: 'Create Pin', location: '/new' }
    ].map((l, id) =>
      <li key={id}>
        <Link to={l.location}>{l.display}</Link>
      </li>
    );
    return (
      <div>
        <Navbar fixedTop inverse toggleNavKey={0}>
           <NavBrand><Link to='/'>Pinterest Clone App</Link></NavBrand>
           <Nav right eventKey={0}>{links}</Nav>
         </Navbar>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
