import React from 'react';
import Logo from '../img/el-heraldo-logo.svg';

function Header(){
    return(
        <div className="row" id="logo-content">
            <div className="col-md-4 finder">
                <button className="btn btn-link secciones-tag" type="button" style={{textDecoration: 'none', color: 'rgb(63, 63, 63)'}}><i class="fa fa-bars" aria-hidden="true"></i> SECCIONES</button>
                <input className="form-controlmx m-4" type="search" placeholder="Buscar" aria-label="Search"></input>
            </div>
            <div className="col-md-4">
                <a href="https://www.elheraldo.co">
                    <img src={Logo} alt="Logo el Heraldo Colombia" width="100%"></img>
                </a>
            </div>
            <div className="col-md-4">
                <button className="btn btn-link login" type="button" style={{textDecoration: 'none', color: 'rgb(63, 63, 63)'}}><i class="fa fa-user-circle-o" aria-hidden="true"></i> INGRESAR</button>
            </div>
            
        </div>
    )
}

export default Header;