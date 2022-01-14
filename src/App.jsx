import React from "react";
import Primeiro from "./Components/Primeiro";
import ComParametro from "./Components/ComParametro";
import ComFilhos from "./Components/ComFilhos";
import Card from "./layout/Card";
import Repeticao from "./Components/Repeticao";
import Condicional from "./Components/Condicional";
import CondicionalComIf from "./Components/CondicionalComIf";
import "./App.css";
import Pai from "./Comunicacao/direta/Pai";
import Super from "./Comunicacao/indireta/Super";
import Input from "./Form/Input";
import Contador from "./Contador/Contador";
import Mega from "./Mega/Mega";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos de React</h1>

    <div className="Cards">
      <Card titulo="#11 - Contador " color="#f1c232">
        <Mega qtdNumeros={10}></Mega>
      </Card>
      <Card titulo="#10 - Contador " color="#660000">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#9 - Input " color="#b960bd">
        <Input></Input>
      </Card>
      <Card titulo="#8 - Comunicação Indireta " color="#fa1218">
        <Super></Super>
      </Card>
      <Card titulo="#7 - Comunicação Direta " color="#168078">
        <Pai sobrenome="Freitas" />
      </Card>
      <Card titulo="#6 - Condicional v2" color="#f88e1f">
        <CondicionalComIf numero={11}></CondicionalComIf>
      </Card>
      <Card titulo="#5 - Condicional" color="##003153">
        <Condicional numero={9}></Condicional>
      </Card>
      <Card titulo="#4 - Repetição" color="#CCD5DC">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="#3 - Componentes Com Filhos" color="#165380">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#2 - Componente com Parametro" color="#287f46">
        <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
      </Card>

      <Card titulo="#1 - Primeiro Componente" color="#cae3fa">
        <Primeiro></Primeiro>
      </Card>

    </div>

  </div>
)