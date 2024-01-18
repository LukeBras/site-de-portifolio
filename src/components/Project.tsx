type ProjectProps = {
    img:string;
    projeto:string;
    link:string;
}

export const Project = ({img,projeto,link}:ProjectProps)=>{
    return(
        <div>
             <div className="w-[500px]  border hover:bg-gray-200 transition-all border-gray-500 rounded-3xl flex flex-col p-7 m-6 justify-center items-center ">
                    <img className="max-h-[700px] h-full object-contain border border-gray-400 p-3 rounded-md w-[600px]" src={img} alt="" />
                    <h1 className="text-3xl p-4 font-bold">{projeto}</h1>
                    <div className=" flex justify-between ">
                        <a href={link} target="blank" className="w-[200px] text-center hover:bg-gray-400 transition-all rounded-lg bg-gray-500 m-3 p-3 text-white">GIT</a>
                        <a href={link} className="w-[200px] text-center hover:bg-gray-400 transition-all rounded-lg bg-gray-500 m-3 p-3 text-white">Acessar</a>
                    </div>
                </div>
        </div>
    )
}