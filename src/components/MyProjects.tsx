import { Project } from "./Project"
import { Title } from "./Title"

export  const MyProjects = ()=>{
    return(
        <div className='h-[900px] mt-[100px]  flex flex-col justify-center items-center mb-[100px] '>
            <div className="max-w-[1700px] p-6  justify-between flex flex-wrap  ">
                <Title text="Projetos"/>
                 <div className=" w-auto  flex flex-wrap  mt-24  m-auto ">
                    <Project img="/assets/img1.jpeg" projeto="Livraria"/>
                    <Project img="/assets/estacionamento.jpg" projeto="Estaciomento"/>
                    <Project img="/assets/todo.jpeg" projeto="Todo-list"/>
                    <Project img="/assets/galeria.jpeg" projeto="Galeria de Fotos (Firebase)"/>
                </div>
            </div>
        </div>
    )
}