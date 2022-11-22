
import Personaje from './Personaje.js'

function Personajes(props){
    return(
        <div class="container margenArriba">
        <h5 id="productos-destacados"><strong> {props.mensaje} </strong></h5>
        
            <div class="card-group">
           <Personaje foto={props.foto} titulo={props.titulo} desc={props.desc} />
          
       

        

    </div>

</div>

    );
}

export default Personajes;