import React from 'react'
import './Login.css'
import img from '../static/login/maklowicz.jpg'

export default function Login() {
    return (
        <React.Fragment>
        <h1 id="logujSieHamie">Loguj sie</h1>
        <form action="action_page.php" method="post">
            <div class="imgcontainer">
              <img src={img} alt="Avatar" class="avatar"/>
            </div>
            <div class="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
                <span class="psw">Forgot <a href="#">password?</a></span>
              </label>
            </div>
            
        </form>
       
        </React.Fragment>
    )
}
