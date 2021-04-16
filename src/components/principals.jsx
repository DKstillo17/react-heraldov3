import React from 'react';
import Logo from '../img/el-heraldo-logo.svg';

function Principals(){
    return(
        <div class="row" id="content-left">
            <div class="col-md-6">
                <a href="#">
                    <h1 class="md">“Hemos sufrido una injusticia”: Luis Fernando Muriel</h1>
                </a>
                <div class="justify-content size-m">
                    <p>El colombiano Luis Muriel, delantero el Atalanta, aseguró este miércoles que su equipo cree que ha sufrido “una injusticia”, en relación a la tarjeta roja directa vista por el suizo Remo Freuler, en el minuto 18 del partido de ida
                        de los octavos de final de la Liga de Campeones perdido contra el Real Madrid (0-1). <br></br><br></br> “Nuestra idea es que hemos sufrido una injusticia, es una roja que nos condicionó. Esa roja lo cambió todo”, afirmó Muriel al acabar
                        el partido del Gewiss Stadium, decidido a cuatro minutos del final por un gol del francés Ferland Mendy.</p>
                </div>
            </div>
            <div class="col-md-6 objetfitcover">
                <div class="thumbnail">

                    <img src="https://www.elheraldo.co/sites/default/files/styles/820x461/public/articulo/2021/02/24/dwmuriel.jpg?itok=pqZIYA42" alt="Luis Fernando Muriel" class="rounded" style={{width:"100%"}}></img>
                    <div class="caption">
                        <p>El delantero de Santo Tomás se mostró convencido de que a pesar de la derrota de este miércoles su equipo sigue con opciones de remontar.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Principals;