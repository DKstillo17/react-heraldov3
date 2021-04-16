import React from 'react';
import Logo from '../img/el-heraldo-logo.svg';

function Infocards(){
    return(
        <div className="row">
            <div className="col-sm-6">
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Minsalud descarta autorización para ingreso de vuelo con Selección brasilt</h5>
                        <p class="card-text">Continúa la polémica sobre la realización del partido Colombia-Brasil por las eliminatorias al mundial.</p>
                        <a href="#" class="btn btn-primaryx">Leer más</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Habilitan línea de atención para actualización de datos de mayores de 60 años</h5>
                        <p class="card-text">El Distrito inicia el acompañamiento a las EPS en el proceso vacunación de adultos mayores, elegibles en primera fase y etapa 2.</p>
                        <a href="#" class="btn btn-primaryx">Leer más</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infocards;