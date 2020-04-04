import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Span from './Span';
import './style.css';

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      correo: '',
      password: ''
    }
  }

  sincronizarCambios(control, expresion) {
    const { name, value } = control;
    const state = {};
    state[name] = value;
    this.setState(state);
  }

  enviarFormulario = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form action="">
          <div>
            <input 
            id="nombre" 
            name="nombre" 
            type="text"
            placeholder="Nombre"
            onChange={(ev) => this.sincronizarCambios(ev.target)}
            />
          </div>
          <div>
            <input 
            id="correo" 
            name="correo" 
            type="text" 
            placeholder="Correo"
            onChange={(ev) => this.sincronizarCambios(ev.target, '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}')}
            />
          </div>
          <div>
            <input 
            id="password" 
            name="password" 
            type="password" 
            placeholder="Contraseña"
            onChange={(ev) => this.sincronizarCambios(ev.target)}
            />
          </div>
          <button type="submit" onClick={this.enviarFormulario}>Enviar</button>
          <button type="reset">Limpiar</button>
        </form>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
      name:'Cristhian Martinez'
    };
  }

  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <Formulario/>
        <p>Hecho por: {this.state.name}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
