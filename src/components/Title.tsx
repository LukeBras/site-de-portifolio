

type TitleProps = {
    text:string;
}
export const Title = ({text}:TitleProps)=>{
    return(
        <h1 className="text-5xl m-auto text-center font-bold border-b p-2 mt-6 font-sans mb-[-70px] border-gray-600">
            {text}
        </h1>
    )
}