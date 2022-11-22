import logo from './img/Logo.png';

function Navbar(){
    return(
    <header>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">

                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li class="nav-item margenLeft active">
                            <a class="nav-link" href="#inicio">INICIO</a>
                        </li>
                        <li class="nav-item margenLeft active">
                            <a class="nav-link" href="#quienesSomos">QUIENES SOMOS</a>
                        </li>
                </ul>
                </div>

            </div>
            </nav>
    
    </header>
    );
}

export default Navbar;





