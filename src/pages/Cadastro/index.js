import React from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
      width: "15ch",
    },
  },
}));

function Cadastro() {
  const classes = useStyles();

  return (
    <>
      <div className="logo-text">
        <h1> Cadastro de Paciente</h1>
        <div className="text">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Nome" variant="outlined" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="CPF" variant="outlined" />

            <TextField id="outlined-basic" label="RG" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Data Nascimento"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Senha" variant="outlined" />
          </form>
          <div className="button-log">
            <div className={classes.button}>
              <Button variant="contained" color="primary">
                Salvar
              </Button>
              <Button variant="contained" color="secondary">
                Apagar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
