import React from 'react';
import { FilmsPage } from './pages/films';
import './App.css';

const Pages = {
  LIST: 'list'
}

class App extends React.Component {
  state = {
    page: Pages.LIST
  }

  render() {
    return(
      <>
        {this.state.page === Pages.LIST && <FilmsPage />}
      </>
    )
  }
}

export default App;
