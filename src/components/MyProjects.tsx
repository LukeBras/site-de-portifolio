import { Project } from "./Project"
import { Title } from "./Title"

export  const MyProjects = ()=>{
    return(
        <div className='h-[1300px] mt-[300px]  flex flex-col justify-center items-center mb-[200px] '>
            <div className="max-w-[1700px] p-6  justify-between flex flex-wrap  ">
                <Title text="Projetos"/>
                 <div className=" w-auto  flex flex-wrap justify-between  mt-24  m-auto ">
                    <Project link="https://github.com/LukeBras/Livraria" img="/assets/img1.jpeg" projeto="Livraria"/>
                    <Project link="" img="/assets/estacionamento.jpg" projeto="Estacionamento"/>
                    <Project link="https://github.com/LukeBras/to-do-list" img="/assets/todo.jpeg" projeto="Todo-list"/>
                    <Project link="https://github.com/LukeBras/galeria-de-fotos" img="/assets/galeria.jpeg" projeto="Galeria de Fotos (Firebase)"/>
                    <Project link="https://github.com/LukeBras/lading-page-carros" img="/assets/site-carros.jpeg" projeto="Template de Carro"/>
                    <Project link="https://github.com/LukeBras/clone-do-spotify" img="/assets/spotify.jpeg" projeto="clone Spotify"/>
                    <Project link="" img="/assets/blog.jpeg" projeto="Blog (context) "/>
                    <Project link="https://github.com/LukeBras/clone-do-Ifood" img="/assets/ifood.jpeg" projeto="Clone do Ifood "/>
                    

                </div>
            </div>
        </div>
    )
}