import React from 'react';

class UsersList extends React.Component {
  state = {
    users: null,
    albums: null
  }

  loadAlbums = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/albums', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    const albums = await response.json();

    this.setState({albums: albums});
  }

  loadUsers = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    const users = await response.json();

    this.setState({users: users});
  }

  componentDidMount() {
    this.loadAlbums();
    this.loadUsers();
  }

  renderUser = (albumId) => {
    const userName = this.state.users.find((user) => user.id === albumId).name;

    return <>{userName}</>
  }

  render() {
    return (
      <>
        {this.state.albums && (
          <ol>
            {this.state.albums.map((album) => (
              <li key={album.id}><b>Title:</b> {album.title} --- <b>User:</b> {this.state.users && this.renderUser(album.userId)}</li>))}
          </ol>)
        }
      </>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <UsersList />
    )
  }
}

export default App;
