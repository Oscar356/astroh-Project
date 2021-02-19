import React from "react";
import "./css/loginRegister.css";
import Navbar from "../components/shared/Navbar";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_ACCOUNT = gql`
  mutation addAccount($email: String!, $name: String!, $password: String!) {
    insert_userAccounts(
      objects: { email: $email, name: $name, password: $password }
    ) {
      returning {
        email
        id
        name
        password
      }
    }
  }
`;

function SignUpPage() {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [registerAccount] = useMutation(CREATE_ACCOUNT);

  function handleResgisterAccount(info) {
    // registerAccount({ variables: { email: , name: , password: } })
  }
   // figure out how to set the inputs to state and the pass them to the function above to put them into GraphQL
  // function handleNameChange(name) {
  //   setName(name);
  // }

  return (
    <>
      <Navbar />
      <div class="register-page">
        <div class="form">
          <form class="register-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button onClick={() => handleResgisterAccount()} type="submit">create</button>
            <p class="message">
              Already registered?{" "}
              <Link to="/accounts/login">
                <p className="linkForSwitch">Sign In</p>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
