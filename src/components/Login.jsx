import "../assets/styles/login.css";
import {Link, useNavigate} from 'react-router-dom'

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;
function Login() {
  const navigate = useNavigate();

  let a=1;
    const handleBlur = (e) => {
        console.log(e.target.value)
    }
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      navigate("/mostrar");
    }

    const handleFocus = () =>{
      console.log('hola mundo');
    }   

      return (
        <div>
          <div className="caja">
            <h2 className="ban">Login</h2>
    
            <form className="info" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="user">Nombre de usuario:</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="user"
                  placeholder="*Escribe tu usuario"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
    
              <div>
                <label htmlFor="user">Contraseña:</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="*Escribe tu contrasena"
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <button id="enviar" type="submit">
                  Entrar
                </button>
                <div>
                <label>aun no tienes cuenta?</label>
                  <Link to="/registro">
                    Registrarse
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    

  
}

export default Login;
