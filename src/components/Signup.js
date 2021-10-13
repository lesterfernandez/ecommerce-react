import StyledSignup from "./styled/Signup.styled";
import StyledSignupForm from "./styled/SignupForm.styled";
import useForm from "./useForm";

const Signup = ({ setUsername }) => {
  const [values, handleChange] = useForm({ username: "", password: "" });

  const submitForm = e => {
    e.preventDefault();
    localStorage.setItem("username", values.username);
    setUsername(values.username);
  };

  return (
    <StyledSignup>
      <StyledSignupForm onSubmit={submitForm}>
        <h1>Sign Up</h1>
        <hr></hr>
        <div>
          <label>
            Username
            <input
              type="text"
              name="username"
              required
              value={values.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create Account</button>
        </div>
      </StyledSignupForm>
    </StyledSignup>
  );
};

export default Signup;
