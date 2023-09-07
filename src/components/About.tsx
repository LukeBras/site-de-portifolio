import {Medal} from 'lucide-react'
import { Title } from './Title' 

export const About = ()=>{
    return(
        <div className="h-[700px] flex flex-col justify-center items-center bg-white">
           <Title text='Sobre mim'/>
            <div className="max-w-7xl shadow-2xl rounded-xl bg-gray-100 flex w-full h-auto p-6  m-auto ">
                <img className="w-[500px] h-[400px] rounded-3xl mr-5 p-3" src="/assets/img2.jpg" alt="" />
                <div className='flex flex-col p-5 border border-gray-400 rounded-xl'>   
                    <div className='flex-1 flex flex-col items-center justify-center'>
                        <Medal/>
                        <h1 className='text-2xl font-bold'>Experince</h1>
                        <h2>+ 3 anos</h2>
                        <p>Programador FrontEnd</p>
                    </div>
                    <p className='p-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
                    </p>
                </div>
              
            </div>
        </div>
    )
}