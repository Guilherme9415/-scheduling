import React, { useState } from "react";
import "./index.css";
import doc from "../../assets/doc.gif";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div className="login">
      <div className="logo">
        <img src={doc} />
      </div>
      <form>
        <div className="login-right">
          <h1>Login</h1>
          <div className="loginEmail">
            <MdEmail />
            <input
              id="user"
              type="text"
              placeholder="Digite seu email"
              
            />
          </div>

          <div className="loginEmailPassWord ">
            <MdLock />
            <input
              id="password"
              placeholder="Digite sua senha"
              type="password"
              
            />
          </div>
         
          <div className="logi">
              <button><Link to="/cadastro">Login</Link></button>
          </div>
          <div className="login-cadastra">
            <h4>Não tenho conta!</h4>
            <button type="submit">Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
