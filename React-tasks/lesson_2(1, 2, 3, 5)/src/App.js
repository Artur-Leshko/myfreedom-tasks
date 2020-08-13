import React from 'react';
import PropTypes from "prop-types";
import { SocialButton } from './components/Button/SocialButton';
import { TwitterButton } from './components/TwitterButton/TwitterButton';
import { FacebookButton } from './components/FacebookButton/FacebookButton';
import { IconBar, ChangeButton } from './components/IconBar/IconBar';
import { NavBar } from './components/NavBar/NavBar';

SocialButton.propTypes = {
  type: PropTypes.string.isRequired
};

IconBar.propTypes = {
  orientation: PropTypes.string
};

ChangeButton.propTypes = {
  className: PropTypes.string.isRequired
};

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialActiveItemId: PropTypes.oneOf(['Home', 'Search', 'About']).isRequired
}

class App extends React.Component {
  render() {
    return(
      <>
        <div>
          First Task:
          <SocialButton type="facebook" />
          <SocialButton type="twitter" />
        </div>

        <div>
          Second Task:
          <FacebookButton />
          <TwitterButton />
        </div>

        Third Task:
        <ChangeButton className='changeButton'>
          Change from horizontal to vertical (or opposite)
        </ChangeButton>
        <IconBar orientation="horizontal" >
          <a className="active" href="#"><i className="fa fa-home"></i></a>
          <a href="#"><i className="fa fa-search"></i></a>
          <a href="#"><i className="fa fa-envelope"></i></a>
          <a href="#"><i className="fa fa-globe"></i></a>
          <a href="#"><i className="fa fa-trash"></i></a>
        </IconBar>

        Fifth Task:
        <NavBar className='navbar' items={['Home', 'Search', 'About']} initialActiveItemId="Home">

        </NavBar>
      </>
    )
  }
}

export default App;
