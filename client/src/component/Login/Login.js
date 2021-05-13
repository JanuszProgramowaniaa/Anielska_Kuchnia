import React from 'react'
import LoginStyles from './Login.module.css'
import img from '../../static/login/maklowicz.jpg'

export default function Login() {
    return (
        <React.Fragment>
        <h1 className={LoginStyles.logujSieHamie}>Zaloguj sie</h1>
        <form action="action_page.php" method="post">
            <div className={LoginStyles.img}>
              <img src={img}  alt="Avatar" class="avatar"/>
            </div>
            <div class="container">
              <label for="uname"><b>Nazwa użytkownika</b></label>
              <input type="text" placeholder="Wprowadz nazwe uzytkownika" name="uname" required />

              <label for="psw"><b>Hasło</b></label>
              <input type="password" placeholder="Wprowadz haslo" name="psw" required />

              <button type="submit" className={LoginStyles.buttonClass}>Zaloguj sie </button>
              <label>
                <input type="checkbox" checked="false" name="remember" /> Zamapiętaj mnie
                <span class="psw">Zapomniałeś <a href="reset-password">hasła?</a></span>
                
              </label>
            </div>
            
        </form>
       
        </React.Fragment>
    )
}
