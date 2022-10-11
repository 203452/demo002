import '../assets/styles/registro.css'
import {useState} from 'react';
function Registro() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');    

    const handleChangeName = (e) => {setName(e.target.value)}
    const handleChangeLastName = (e) => {setLastName(e.target.value)}
    const handleChangeUserName = (e) => {setUserName(e.target.value)}
    const handleChangePassword = (e) => {setPassword(e.target.value)}

    const handleSubmit = (ev) =>{
        ev.preventDefault();
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                lastname: lastName,
                username: userName,
                password: password
            })
        }
        fetch('http://ec2-52-23-209-79.compute-1.amazonaws.com/user/',option)
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch(err => {console.log(err)})
      }
    return ( 
        <div className="caja">
            <div>
                <h1>Registro</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='* Nombres:' name='name' value={name} onChange={handleChangeName}/>
                <input type="text" placeholder='* Apellidos' name='lastName' value={lastName} onChange={handleChangeLastName}/>
                <input type="text" placeholder='* Nombre de usuario' name='userName' value={userName} onChange={handleChangeUserName}/>
                <input type="password" placeholder='* contraseña' name='password'value={password} onChange={handleChangePassword}/>
                <button id='enviar' type='submit' onClick={handleSubmit}>REGISTRARSE</button>
            </form>
        </div>
     );
}

export default Registro;