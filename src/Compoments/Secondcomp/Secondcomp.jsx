import "./Secondcomp.css";

export default function Secondcomp(props) {
    
   
    return (
        <div className="sec h-[90%] w-[90%] flex justify-center items-center flex-wrap p-10 flex-col rounded-xl border-4 border-gray-950 text-white font-bold gap-2">
            <h1>MY BAG : {props.article}</h1>
            <h1>{props.monny} $</h1>
            {
                props.panier.map((element) => {
                    return (
                        <div className="panier w-[90%] flex gap-4 rounded-xl ps-4">{element}</div>  
                    )
                })
            }
            
            
        </div>
    )
}
