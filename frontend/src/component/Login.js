import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  //method
  //data reader
  componentDidMount() {}
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  btnlogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/login', this.state)
      .then((response) => {
        console.log('login', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userType', response.data.userType);
        alert('login successful');
        window.location.href = '/getUser';
      })
      .catch((error) => {
        alert('login failed');
      });
  };
  render() {
    return (
      // <>
      //   <h1>im login 1</h1>
      //   <form action="action_page.php" method="post">
      //     <div className="imgcontainer">
      //       <img src="img_avatar2.png" alt="Avatar" className="avatar" />
      //     </div>

      //     <div className="container">
      //       <label for="email">
      //         <b>email</b>
      //       </label>
      //       <input
      //         type="email"
      //         id="email"
      //         placeholder="Enter email"
      //         name="email"
      //         defaultValue={this.state.email}
      //         onChange={this.changeHandle}
      //         required
      //       />

      //       <label for="psw">
      //         <b>Password</b>
      //       </label>
      //       <input
      //         type="password"
      //         placeholder="Enter Password"
      //         name="password"
      //         defaultValue={this.state.password}
      //         onChange={this.changeHandle}
      //         required
      //       />

      //       <button type="submit" onClick={this.btnlogin}>
      //         Login
      //       </button>
      //       <label>
      //         <input type="checkbox" name="remember" />
      //         Remember me
      //       </label>
      //     </div>

      //     <div className="container">
      //       <button type="button" className="cancelbtn">
      //         Cancel
      //       </button>
      //       <span className="psw">
      //         Forgot <a href="#">password?</a>
      //       </span>
      //     </div>
      //   </form>
      // </>
      <>
        <div className="container">
          <input type="checkbox" id="check" />
          <div className="login form">
            <header>Login</header>
            <form action="#">
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
                defaultValue={this.state.email}
                onChange={this.changeHandle}
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                defaultValue={this.state.password}
                onChange={this.changeHandle}
                required
              />
              <a href="#">Forgot password?</a>
              <button
                type="button"
                className="button"
                value="Login"
                onClick={this.btnlogin}
              >
                Login
              </button>
            </form>
            <div className="signup">
              <span className="signup">
                Don't have an account?
                <Link to="/Register">
                  <label htmlFor="check">Signup</label>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
