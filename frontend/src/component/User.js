import axios from 'axios';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
class User extends Component {
  state = {
    User: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  deleteUser = (userid) => {
    // e.preventDefault();
    axios
      .delete('http://localhost:4000/deleteuser/' + userid, this.state.config)
      .then((res) => {
        console.log('response', res);
        alert('delete successfull');
      })
      .catch((error) => {
        console.log(error);
        alert('delete failed');
      });
  };
  //method
  componentDidMount() {
    axios
      .get('http://localhost:4000/userall', this.state.config)
      .then((response) => {
        this.setState({
          User: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // if (
    //   localStorage.getItem('userType') &&
    //   localStorage.getItem('userType') !== 'Admin'
    // ) {
    //   return <Navigate to="/login1"> </Navigate>;
    // }
    return (
      <>
        {this.state.User.map((val) => {
          return (
            <>
              <div className="container2">
                <div className="username">
                  <h2>Username: </h2> {val.username}
                </div>
                <div className="email">
                  <h2>Email: </h2>
                  {val.email}
                </div>
                <div className="password">
                  <h2>Password: </h2>
                  {val.password}
                </div>
                <div className="usertype">
                  <h2>Usertype: </h2>
                  {val.userType}
                </div>
                <div className="testing">
                  <img
                    src={'http://localhost:4000/' + val.avatar}
                    alt="image"
                  />
                  <button
                    className="delete"
                    onClick={this.deleteUser.bind(this, val._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default User;
