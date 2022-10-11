import "../assets/styles/login.css";
import Registro from "./Registro";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;
function Login() {
  let a=1;
    const handleBlur = (e) => {
        console.log(e.target.value)
    }
    
    const handleSubmit = (e) =>{
      e.preventDefault();
    }

    const handleFocus = () =>{
      console.log('hola mundo');
    }   
    if(a==1){
      return(
        <Registro></Registro>
      )
    }
    else{
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
                <label htmlFor="user">Contraaseña:</label>
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
              </div>
            </form>
            <button>Registrarse</button>
          </div>
        </div>
      );
    }

  
}

export default Login;
