import {GithubIcon,LinkedinIcon} from 'lucide-react'
export const Banner = ()=>{
    return(
        <div className="h-[900px]   flex justify-center items-center bg-white">
            <div className="max-w-7xl flex justify-center items-center w-full h-full   m-auto">
                <img className="w-[350px]   mr-7 rounded-full" src="/assets/img.jpg" alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-gray-600 font-semibold'>Olá, eu sou</p>
                    <h1 className='text-[35px] font-bold font-sans'>Lucas Ferreira</h1>
                    <h2 className='text-[40px] text-gray-600 font-bold font-sans'>Desenvolvedor Front End </h2>
                    <div className='flex mt-3'>
                        <GithubIcon className=' mr-2 w-10  rounded-full text-black'/>
                        <LinkedinIcon className=' w-10  text-black rounded-full'/>
                    </div>
                </div>
            </div>
        </div>
    )
}