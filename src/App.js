import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/styles.css';
import Navbar from './components/Navbar';
import Personajes from './components/Personajes';
import Footer from './components/Footer'; 
import Janusz from '../src/components/img/descarga.jpg'




function App() {
  return (
    <div className="App">
        <Navbar />
        <Personajes mensaje="1950" foto={Janusz} titulo="Azriel David Fastag"  desc="Corre el año 1950, salón nacional de música y canto de Polonia. Ani Maanim entonada por Azriel David Fatag suena en cada rincón del gran salón. Llena de pasion y emocion es escuchada por la audiencia quien aclama de pie y llenando de aplausos el silencio de cada canción"/>
        <Personajes mensaje="1960" titulo="Janusz Korczak" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Janusz_Korczak.PNG/220px-Janusz_Korczak.PNG" desc="Estamos en 1960, 15 años después de la creación de las Naciones Unidas. El programa de ayuda a la educación y sustento de la niñez en el mundo es encabezado por el gran pedagogo y escritor Janusz Jorczak. Programas de ayuda humanitaria y también de progreso en la educación asombran al mundo y son transmitidos a cada país por el gran portavoz de alta estima."/>
        <Personajes mensaje="1970" titulo="Dawid Sierakowiak" foto="https://s.lubimyczytac.pl/upload/authors/110363/373335-352x500.jpg" desc="Año 1970, la época de los 70, musicalmente espléndida, y llena de progresos tecnológicos que asombran y maravillan a la sociedad. Todo documentado y escrito para su lectura en el Diario Nacional de Polonia. Su columnista fantástico y con una manera de escribir que transmite sentimiento y emociones es ni más ni menos Dawid Sierakowiak. Becado en la Sociedad de Escuelas Secundarias Judías en Lodz. Un alumno eficaz que no paró jamás de escribir ni en medio de en el gueto que se encontraba escribiendo e informando todo lo que pudiese. Una vez terminada la guerra se volvió un periodista mas y hasta este año el mejor informante de lo que día a día vive Polonia. "/>
        <Personajes mensaje="1980" titulo="Moshe Ze'ev Flinker" foto="https://www.thehbp.org/wp-content/uploads/2018/12/mosheflinker.jpg" desc="Michael Jackson y Queen hacen furor a nivel mundial en cuanto a lo musical. El teatro revive, la ópera se llena de audiencias y las preguntas filosóficas sobre cómo debe ser la sociedad contemporánea hacen hincapié. Muchas preguntas pocas respuestas pero uno de sus pensadores Moshe Flinker revoluciona sociedades con lo que plantea tanto sobre ética ciudadana como de la vida en sociedad y la religión que condiciona. No era su afán de hacer a cualquiera razonar hasta más allá de su entendimiento lo que atraía a cualquiera. Sino su capacidad de captar a todos con su lenguaje universal después de todo es  un lingüista dotado que conoce y estudia ocho  "/>
        <Personajes mensaje="1990" titulo="Mordejai Anielewicz" foto="https://upload.wikimedia.org/wikipedia/commons/8/85/Mordechai_Anielewicz.jpg" desc="Congreso Tnuati Internacional.
Las tnuot del mundo se reúnen en el año 2000 frente al problema de cómo educar de modo no formal a los janijim del mundo.
Todo bajo la supervisión de Mordejai Anielewicz.
Gram madrij y patrocinador de la Tnua Hashomer Hatzair donde muchos jóvenes activan en pos del estado de Israel.
"/>
        <Personajes mensaje="2000" titulo="Pawel Frenkiel" foto="https://upload.wikimedia.org/wikipedia/commons/f/fe/%D7%A4%D7%90%D7%95%D7%95%D7%9C_%D7%A4%D7%A8%D7%A0%D7%A7%D7%9C.jpg" desc="10 años después del congreso nuevas ideologías que ya existían en un pasado toman fuerza. En este caso la ideología de derecha se adentra en las tnuot y sus formas de activar y transmitir el Tojnit Jinuj. Aquella persona que habla y muestra las formas de activar no es más ni menos que Pawel Frenkiel íntimo amigo de Mordejai quien no pudo asistir al congreso por temas de salud."/>
        <Personajes mensaje="2010" titulo="Peter van Pels" foto="https://upload.wikimedia.org/wikipedia/commons/6/69/Peter_van_Pels_2014-05-28_00-43.jpg" desc="Peter, el zeide de la familia, juega con sus nietos todos los fines de semana al burako. Ellos se podrían pasar toda la tarde haciéndolo, es casi un rito familiar; uno que sí es ya una costumbre es prender las velas de Shabat todos juntos en la ventana. Él también es el líder comunitario de zeides de rikudim, donde junto a sus amigos de toda la vida pasa un buen momento mientras se mantiene en forma, cosa que necesita hacer debido a sus largos años. Peter es conocido por estar todo el tiempo haciendo bromas, estando alegre mientras repara su bicicleta de toda la vida, la que había comprado en Amsterdam cuando tenía 15 años."/>
       
       
        <Personajes mensaje="2022" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anne_Frank_lacht_naar_de_schoolfotograaf.jpg/250px-Anne_Frank_lacht_naar_de_schoolfotograaf.jpg" titulo="Ana Frank" desc="nuestro año y nuestro tiempo.
Filas y filas de gente hacen espera en las bibliotecas y más aún en la Gran Biblioteca de Polonia.
Una autora joven en sus principios ya grande para nuestro tiempo hace su firma de libros anual recibiendo halagos de todo aquel que leyese sus grandes obras e historias reales.
Así es Ana Frank, aficionada y amante de escribir sus historias publica su nuevo libro Sueños Y Realidades.

Un libro que cuenta historias que cada lector podría llegar a pensar que son tan reales como el agua en los océanos o las nubes en el cielo….

Pero acaso todo lo que vemos y leemos es real o tan solo podría ser obra de un soñar.

Sueños de cosas que pasan o cosas que no pasaron a su vez.

Al igual que experiencias que podrían haber sido como no fueron.

Así es. Tantas historias, tantos sueños y deseos que en verdad no ocurrieron.
Tal magnitud de vida es opacada por actos que nadie siquiera podría imaginar.

Esas vidas no ocurrieron, pero podrían haberlo hecho.

Recordar y Aprender Para No Olvidar.

"/>

        <Footer />
    </div>
  );
}

export default App;
