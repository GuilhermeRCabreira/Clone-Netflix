import React from "react";
import "./Login.css";
import Logo from "../assets/Netflix_Logo_RGB.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="login">
      <img src={Logo} alt="Netflix" className="login--logo" />
      <div className="login--form">
        <h1>Entrar</h1>
        <form>
          {/* <input type="text" placeholder="Seu nome" /> */}
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button onClick={handleLogin}>Entrar</button>
          <div className="form--help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Lembrar de mim</label>
            </div>
            <p>Precisa de ajuda?</p>
          </div>
        </form>
        <div className="form--switch">
          <p>
            Novo por aqui? <span>Cadastre-se agora</span>{" "}
          </p>
          {/* <p>
            Já tem uma conta? <span>Entrar agora</span>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
