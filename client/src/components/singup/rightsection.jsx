import { useState } from "react";

export default function Rightsection() {
  const [checked, setChecked] = useState(false);

  function handleCheck(e) {
    setChecked(e.target.checked); // Correct way to read checkbox state
  }

  return (
    <div className="rightsection">
      <p>
        Join & Discover charming rooms, <br />
        seamless booking
      </p>

      <div id="inputs">
        <div className="order">
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="input" />
        </div>
        <div className="order">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="input" />
        </div>
        <div className="order">
          <label htmlFor="password">password</label>
          <input type="password" id="input" />
        </div>
      </div>

      <div id="acceptance">
        <div id="check">
          <input type="checkbox" checked={checked} onChange={handleCheck} />
          <label style={{ fontSize: 15 }}>
            I accept the terms and Conditions
          </label>
        </div>

        <button disabled={!checked} id="signupbtn">
          Sign up
        </button>
      </div>

      <p id="user">
        Own an account? <b><u>Jump right in</u></b>
      </p>
    </div>
  );
}
