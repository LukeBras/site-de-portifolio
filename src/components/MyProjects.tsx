import { Project } from "./Project"
import { Title } from "./Title"

export  const MyProjects = ()=>{
    return(
        <div className='h-[900px] mt-[100px]  flex flex-col justify-center items-center mb-[100px] '>
            <div className="max-w-[1700px] p-6  justify-between flex flex-wrap  ">
                <Title text="Projetos"/>
                 <div className=" w-auto  flex flex-wrap justify-between  mt-24  m-auto ">
                    <a href="https://github.com/LukeBras/Livraria" target="blank">
                         <Project img="/assets/img1.jpeg" projeto="Livraria"/>
                    </a>
                    
                    <Project img="/assets/estacionamento.jpg" projeto="Estaciomento"/>
                    <Project img="/assets/todo.jpeg" projeto="Todo-list"/>
                    <Project img="/assets/galeria.jpeg" projeto="Galeria de Fotos (Firebase)"/>
                    <Project img="/assets/site-carros.jpeg" projeto="Site de Carro"/>
                    <Project img="/assets/blog.jpeg" projeto="Blog (context) "/>

                </div>
            </div>
        </div>
    )
}