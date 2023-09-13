import { Title } from "./Title"
import {CheckCircleIcon} from 'lucide-react'

export const Experince = ()=>{
    return(
        <div className="h-[700px]  flex  items-center flex-col">
            <Title text="Experince"/>
            <div className="max-w-7xl rounded-lg shadow-2xl border-gray-600 h-[500px] flex justify-between w-full flex-wrap  p-7 m-auto max-[850px]:h-[300px] ">
                <div className="w-[300px] border-b border-gray-400 h-[100px] flex m-3 p-3 ">
                    <CheckCircleIcon className="mr-3 h-11"/>
                    <div>
                        <h1 className="font-bold text-2xl">HTML</h1>
                        <h2>Com experiência</h2>
                    </div>
                </div>
                <div className="w-[300px] border-b border-gray-400  h-[100px] flex  m-3 p-3 ">
                    <CheckCircleIcon  className="mr-3"  />
                    <div>
                        <h1  className="font-bold text-2xl">CSS</h1>
                        <h2>Com experiência</h2>
                    </div>
                </div>
                <div className="w-[300px] border-b border-gray-400  h-[100px] flex  m-3 p-3 ">
                    <CheckCircleIcon  className="mr-3" />
                    <div>
                        <h1  className="font-bold text-2xl">JavaScript</h1>
                        <h2>Com experiência</h2>
                    </div>
                </div>
                <div className="w-[300px] border-b border-gray-400  h-[100px] flex  m-3 p-3 ">
                    <CheckCircleIcon className="mr-3" />
                    <div>
                        <h1  className="font-bold text-2xl">TypeScript</h1>
                        <h2>Com experiência</h2>
                    </div>
                </div>
                <div className="w-[300px] border-b border-gray-400  h-[100px] flex  m-3 p-3 ">
                    <CheckCircleIcon  className="mr-3" /> 
                    <div>
                        <h1  className="font-bold text-2xl">React/Nextjs</h1>
                        <h2>Com experiência</h2>
                    </div>
                </div>
                <div className="w-[300px] border-b border-gray-400  h-[100px] flex  m-3 p-3 ">
                    <CheckCircleIcon  className="mr-3" /> 
                    <div>
                        <h1  className="font-bold text-2xl">GIT</h1>
                        <h2>Com experiência</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}