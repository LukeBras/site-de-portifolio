import Link from "next/link"
import { About } from "./About"

export const Header = ()=>{
    return(
        <header className="h-[100px] flex justify-center bg-gray-700 text-white">
            <div className="flex justify-between max-w-[1300px] w-full h-auto m-auto max-[700px]:p-5">
                <h1 className="text-3xl font-light">Lucas Ferreira</h1>
            <ul className="flex justify-between items-center  w-[500px]">   
                <li className="text-2xl font-light hover:text-gray-400 cursor-pointer hover:underline transition-all">Sobre</li>
                <li className="text-2xl font-light hover:text-gray-400 cursor-pointer hover:underline transition-all">Experiência</li>
                <li className="text-2xl font-light  hover:text-gray-400 cursor-pointer hover:underline transition-all">Projetos</li>
                <li className="text-2xl font-light hover:text-gray-400 cursor-pointer hover:underline transition-all">Contato</li>
            </ul>
            </div>
        </header>
    )
}