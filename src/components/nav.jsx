import React from 'react';
import Logo from '../img/el-heraldo-logo.svg';

function Nav(){
    return(
        <div class="row">
            <div class="col-md-12">
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#" style={{fontWeight: "500;"}}>
                            <i class="fa fa-newspaper-o" aria-hidden="true"></i> NOTICIAS
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{fontWeight: "500;"}}>
                            <i class="fa fa-balance-scale" aria-hidden="true"></i> JUDICIALES
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" style={{fontWeight: "500;"}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-futbol-o" aria-hidden="true"></i> DEPORTES
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Rincón Juniorista</a></li>
                            <li><a class="dropdown-item" href="#">Selección Colombia</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{fontWeight: "500;"}}>
                            <i class="fa fa-list-alt" aria-hidden="true"></i> CLASIFICADOS
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{fontWeight: "500;"}}>
                            <i class="fa fa-university" aria-hidden="true"></i> POLÍTICA
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;