
import swal from 'sweetalert';

function Personaje(props){
    const mostrarAlerta=()=>{
        swal({
            title: props.titulo,
            text: props.desc,
            button: "accept"
        })
    }
    return(

            <div class="col-12 col-md-4 margenArribaCard col d-flex justify-content-center mx-auto">
                <div class="card ">
                <img src={props.foto} class="card-img-top" alt="levatorio-1"/>
                <div class="card-body">
                <button onClick={()=>mostrarAlerta()} type="button" class="btn btn-primary">View More</button>

                    
            
                </div>
                </div>
            </div>
                            


    );
}

export default Personaje;