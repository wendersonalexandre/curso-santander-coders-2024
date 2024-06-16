import React from 'react';
 import {Navbar} from './estudos/navnar';
import { Article } from './estudos/article/article';


//Componente em classe é uma classe que herda a classe component do react

// e retorna HTML dentro do metodo render 

class App extends React.Component {

  render(){
    return(
        <>
          <Navbar />
          <Article />
        </>
    );

  }
}

export default App;