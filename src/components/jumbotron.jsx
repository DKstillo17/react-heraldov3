import React from 'react';
import Logo from '../img/el-heraldo-logo.svg';

function Jumbotron(){
    return(
        <div class="row">
            <div class="col-md-12">
                <div class="jumbotron">
                    <h1 class="display-4">Vacunas contra el COVID-19</h1>
                    <p class="lead">Colombia está próxima a iniciar su proceso de vacunación contra el covid-19 el próximo 20 de febrero, empezando la inmunización con el personal de salud de la primera línea de atención de la pandemia y los adultos de 80 años y más
                        años, de acuerdo con la priorización definida en el Plan Nacional de Vacunación. Para cumplir este propósito el Ministerio de Salud y Protección Social ha construido el aplicativo Mi Vacuna COVID19.</p>
                    <hr class="my-4"></hr>
                    <a class="btn btn-primaryx btn-lg" href="#" role="button">Mi Vacuna</a>
                    <button class="btn btn-primaryx btn-lg m-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Terminos y condiciones</button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum blanditiis ratione id, vitae nam perspiciatis in labore praesentium accusantium, voluptate eaque. Perspiciatis in vel ex perferendis accusantium, commodi similique libero
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;