import React from 'react';
import { render } from 'react-dom';
import Home from '../Components/Pages/Containers/Home';
import data from '../api.json';

//ReactDOM.render(que voy a renderizar, donde lo haré);

/*
Clase 1
const $app = document.getElementById('app');
const $holaMundo = <h1>Hola Estudiante!</h1>;
*/
const $app = document.getElementById('app');

render ( <Home data={data} />,$app);
//ReactDOM.render(<Category data={data} />, $app);
/*console.log(data.categories)
data.categories[0].playlist.map( item => console.log(item.title))*/
