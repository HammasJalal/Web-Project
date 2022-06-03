import "../App.css";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import DatePicker from "react-date-picker";

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true });
  }

  showRegisterBox() {
    this.setState({ isLoginOpen: false });
  }

  render() {
    return (
      <Fragment>
        <div class="header">Brilliant Pro</div>
        <div class="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {!this.state.isLoginOpen && <RegisterBox />}
        </div>
        <div class="mx-auto" style={{ width: "400px" }}>
          {!this.state.isLoginOpen && (
            <div class="btn btn-primary" onClick={this.showLoginBox.bind(this)}>
              Login
            </div>
          )}
          {this.state.isLoginOpen && (
            <div
              class="btn btn-primary"
              onClick={this.showRegisterBox.bind(this)}
            >
              Register
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const LoginBox = () => {
  const dispatch = useDispatch();
  const userDetails = {
    username: "admin",
    password: "1234",
  };
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    if (user === userDetails.username && pass === userDetails.password) {
      dispatch(login(userDetails));
    }
  };
  return (
    <div class="mx-auto" style={{ width: "400px", marginTop: "200px" }}>
      <div class="header">Login to Brilliant Pro</div>
      <div class="box">
        <div class="mb-3">
          <label class="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            class="form-control"
            placeholder="Username"
          />
        </div>

        <div class="mb-3">
          <label class="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            class="form-control"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => submitLogin(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export const RegisterBox = () => {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [dob, setDob] = React.useState(new Date());
  const [registered, setRegistered] = React.useState(false);

  const dispatch = useDispatch();

  const submitRegister = (e) => {
    e.preventDefault();

    //IF CONDITIONS MEET(EMAIL,USERNAME IS AVAILABLE)
    if (user && pass && email) {
      setRegistered(true);
    }
  };

  const submitProfile = (e) => {
    e.preventDefault();

    dispatch(
      login({
        username: user,
        password: pass,
        email: email,
        phone: phone,
        address: address,
        fullName: fullName,
        dob: dob,
      })
    );
  };

  if (!registered) {
    return (
      <div class="mx-auto" style={{ width: "400px", marginTop: "200px" }}>
        <div class="header">Register to Brilliant Pro</div>
        <div class="box">
          <div class="mb-3">
            <label class="form-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              class="form-control"
              placeholder="Username"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              placeholder="Email"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              class="form-control"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => submitRegister(e)}
          >
            Register
          </button>
        </div>
      </div>
    );
  } else if (registered) {
    return (
      <div class="mx-auto" style={{ width: "400px" }}>
        <div class="header">Create a Profile</div>
        <div class="box">
          <div class="mb-3">
            <label class="form-label" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              class="form-control"
              placeholder="Full Name"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="email"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              class="form-control"
              placeholder="Phone"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              class="form-control"
              placeholder="Address"
            />
          </div>
          <div class="mb-3">
            <label class="form-label" htmlFor="address">
              Date of Birth
            </label>
            <DatePicker onChange={setDob} value={dob}></DatePicker>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => submitProfile(e)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
};

export const createProfile = () => {
  return <div>createProfile</div>;
};

export default LoginRegister;