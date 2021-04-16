import React from 'react';
import Logo from '../img/el-heraldo-logo.svg';

function Footersection(){
    return(
        <div className="row" id="content-footer">
            <div className="col-md-2 secciones">
                <h6>SECCIONES</h6>
                <ul>
                    <li><a href="#">Judicial </a></li>
                    <li><a href="#">Rincón Juniorista</a></li>
                    <li><a href="#">Cultura</a></li>
                    <li><a href="#">Entretenimiento</a></li>
                    <li><a href="#">Política</a></li>
                    <li><a href="#">Deportes</a></li>
                </ul>
            </div>
            <div className="col-md-2 secciones">
                <h6>.</h6>
                <ul>
                    <li><a href="#">Medio Ambiente</a></li>
                    <li><a href="#">País</a></li>
                    <li><a href="#">Cultura</a></li>
                    <li><a href="#">Economía</a></li>
                    <li><a href="#">Mundo</a></li>
                    <li><a href="#">Locales</a></li>
                </ul>
            </div>
            <div className="col-md-2 secciones">
            <h6>REGIÓN CARIBE</h6>
                <ul>
                    <li><a href="#">Bolívar</a></li>
                    <li><a href="#">Cesar</a></li>
                    <li><a href="#">Cordoba</a></li>
                    <li><a href="#">La Guajira</a></li>
                    <li><a href="#">Magdalena</a></li>
                    <li><a href="#">Sucre</a></li>
                </ul>
            </div>
            <div className="col-md-2 secciones">
            <h6>SOCIEDAD</h6>
                <ul>
                    <li><a href="#">Educación</a></li>
                    <li><a href="#">Salud</a></li>
                    <li><a href="#">Familia</a></li>
                    <li><a href="#">Coronavirus</a></li>
                    <li><a href="#">Ciencia</a></li>
                    <li><a href="#">Tecnología</a></li>
                </ul>
            </div>
            <div className="col-md-2 secciones">
            <h6>.</h6>
                <ul>
                    <li><a href="#">Turismo</a></li>
                    <li><a href="#">Mascotas</a></li>
                    <li><a href="#">Mujer e Igualdad</a></li>
                    <li><a href="#">LGBTI</a></li>
                    <li><a href="#">Migración</a></li>
                </ul>
            </div>
            <div className="col-md-2 secciones">
            <h6>NUESTROS PORTALES</h6>
                <ul>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">Revista</a></li>
                    <li><a href="#">Caribe</a></li>
                    <li><a href="#">Aldia.co</a></li>
                    <li><a href="#">Clasificados</a></li>
                    <li><a href="#">Papel Digital</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footersection;