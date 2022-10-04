import '../assets/styles/login.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>
function Login() {

    return ( 
        <div>
            <div className="caja">
            <h2 className='ban'>Login</h2>
            <section className="info">
                <label htmlFor="user">Nombre de usuario:</label>

                <input type="text" autoComplete='off' name='user' placeholder='*Escribe tu usuario'/>

                <label htmlFor="user">Contraaseña:</label>

                <input type="password" name='pass' placeholder='*Escribe tu contrasena'/>
                <div>
                    <button id="enviar" onClick={console.log('logeado')}>Entrar</button>
                </div>
            </section>
        </div>
        </div>
     );
}

export default Login;