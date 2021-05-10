import React from 'react'
import LoginStyles from './Rejestracja.module.css'


export default function Rejestracja() {
    return (
        <React.Fragment>
        <h1 className={LoginStyles.logujSieHamie}>Zarejestruj się</h1>
        <form action="action_page.php" method="post">
         
            <div class="container">
            <label for="uname"><b>Imie</b></label>
              <input type="text" placeholder="Wprowadz swoje imie" name="name" required />

              <label for="uname"><b>Nazwisko</b></label>
              <input type="text" placeholder="Wprowadz swoje nazwisko" name="uname" required />

              <label for="uname"><b>Nazwa użytkownika</b></label>
              <input type="text" placeholder="Wprowadz nazwe uzytkownika" name="uname" required />

              <label for="psw"><b>Hasło</b></label>
              <input type="password" placeholder="Wprowadz haslo" name="psw" required />

              <label for="psw"><b>Powtórz hasło</b></label>
              <input type="password" placeholder="Wprowadz haslo" name="psw1" required />

              <input type="checkbox" checked="false" name="rules" /> Potwierdzam regulamin

              <button type="submit" className={LoginStyles.buttonClass}>Zarejestruj się </button>
              
              <label>
            
              
                
              </label>
            </div>
            
        </form>
       
        </React.Fragment>
    )
}
