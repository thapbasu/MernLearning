import { Component } from 'react';
import axios from 'axios';
class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    userType: '',
    avatar: '',
  };
  //method
  //data reader
  componentDidMount() {}
  changehandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  btnlogin = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', this.state.avatar);
    data.append('username', this.state.username);
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    data.append('userType', this.state.userType);

    axios
      .post('http://localhost:4000/register', data)
      .then((response) => {
        console.log('login', response.data);
        alert('register successful');
      })
      .catch((error) => {
        alert('register failed');
      });
  };
  filehandle = (e) => {
    this.setState({
      avatar: e.target.files[0],
    });
  };
  render() {
    return (
      <>
        {/* <h1>im login 1</h1>
        <form
          action="action_page.php"
          method="post"
          enctype="multipart/form-data"
        >
          <div className="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar" />
          </div>
          <div className="container">
            <label for="uname">
              <b>Username</b>
            </label>

            <input
              type="text"
              placeholder="Enter Email"
              name="username"
              defaultValue={this.state.username}
              onChange={this.changehandle}
              required
            />

            <label for="uname">
              <b>Email</b>
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              defaultValue={this.state.email}
              onChange={this.changehandle}
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              defaultValue={this.state.password}
              onChange={this.changehandle}
              required
            />

            <label for="psw">
              <b>userType</b>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              name="userType"
              defaultValue={this.state.userType}
              onChange={this.changehandle}
              required
            />
            <label for="psw">
              <b>Image</b>
            </label>
            <input
              type="file"
              placeholder="Enter image"
              name="avatar"
              defaultValue={this.state.avatar}
              onChange={this.filehandle}
              required
            />
            <button type="submit" onClick={this.btnlogin}>
              Login
            </button>
            <label>
              <input type="button" checked="checked" name="remember" /> Remember
              me
            </label>
          </div>

          <div class="container">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form> */}
        <div className="registration form">
          <div className="container">
            <form
              action="action_page.php"
              method="post"
              enctype="multipart/form-data"
            >
              <h1>Signup</h1>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                defaultValue={this.state.username}
                onChange={this.changehandle}
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                defaultValue={this.state.email}
                onChange={this.changehandle}
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                defaultValue={this.state.password}
                onChange={this.changehandle}
                required
              />
              <input
                type="text"
                placeholder="Enter UserType"
                name="userType"
                defaultValue={this.state.userType}
                onChange={this.changehandle}
                required
              />
              <input
                type="file"
                placeholder="Enter image"
                name="avatar"
                defaultValue={this.state.avatar}
                onChange={this.filehandle}
                required
              />
              <button type="submit" className="button" onClick={this.btnlogin}>
                Register
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Register;
