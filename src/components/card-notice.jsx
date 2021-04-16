import React from 'react';
import Logo from '../img/el-heraldo-logo.svg';

function Cardnotice(){
    return(
        <div class="row">
            <div class="col-md-6">
                <div class="row" id="content-twin">
                    <div class="col-sm-6">
                        <a href="#">
                            <h1 class="sm-title">Alertan de posible plan de radicales para volar Capitolio con Biden dentro
                            </h1>
                        </a>
                        <p class="sm-text">La Policía del Congreso dijo que "miembros de milicias" que participaron en el asalto de enero.</p>
                    </div>
                    <div class="col-sm-6">
                        <img src="https://www.elheraldo.co/sites/default/files/styles/200x113/public/articulo/2021/02/25/yry4aki5tzgrxldu77snv47xxa.jpg?itok=hYSzQUgx" alt="Capitolio" class="rounded"></img>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row" id="content-twin">
                    <div class="col-sm-6">
                        <a href="#">
                            <h1 class="sm-title">Inhabilitan a Guaidó para ejercer cargos públicos por 15 años en Venezuela
                            </h1>
                        </a>
                        <p class="sm-text">Otros 27 exdiputados también fueron inhabilitados para ejercer cargos públicos.
                        </p>
                    </div>
                    <div class="col-sm-6">
                        <img src="https://www.elheraldo.co/sites/default/files/styles/200x113/public/articulo/2021/02/25/ipfu5wudtfdn7ijjhsnuuybcmu.jpg?itok=ZLQiuf5l" alt="Guadio" class="rounded"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardnotice;