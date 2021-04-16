import React from 'react';
import Logo from '../img/el-heraldo-logo.svg';

function Social(){
    return(
        <div className="row" id="content-f">
            <div className="col-md-4">
                <button type="button" className="btn btn-primary btn-sm">SUSCRÍBETE AL BOLETÍN DIARIO DE NOTICIAS</button>
            </div>
            <div className="col-md-4 logo">
                <img src="https://www.elheraldo.co/sites/all/themes/elheraldo/images/el-heraldo-logo.svg" alt=""></img>
                <p>
                    <b>EL HERALDO S.A.</b> Prohibida la reproducción y utilización, total o parcial, de los contenidos en cualquier forma o modalidad, sin previa, expresa y escrita autorización, incluyendo su mera reproducción y/o puesta a disposición
                    con fines comerciales, directa o indirectamente lucrativos. 2000 - 2021 ©
                </p>
            </div>
            <div class="col-md-4">
                <div class="redes">
                    <label>Síguenos en las redes:</label>
                    <div class="follow">
                        <a class="facebook" href="https://www.facebook.com/fansheraldo"></a>
                        <a class="twitter" href="https://twitter.com/elheraldoco"></a>
                        <a class="instagram" href="https://www.instagram.com/elheraldoco/"></a>
                        <a class="youtube" href="https://www.youtube.com/user/ELHERALDOINTERNET"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social;