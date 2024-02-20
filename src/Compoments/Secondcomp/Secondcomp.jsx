import "./Secondcomp.css";

export default function Secondcomp(props) {
    
    return (
        <div className="h-[90%] w-[70%] flex justify-start items-start flex-wrap p-10 bg-green-300 flex-col">
            <p>{props.monny}</p>
            <p>{props.article}</p>
            <p></p>
        </div>
    )
}
