import "./Firstcomp.css";


export default function Firstcomp(props) {
    
    return (
        <div className="h-[90%] w-[90%] flex justify-center items-center flex-wrap gap-10">
            
            {
                props.Data.map((element) => {
                    return(
                    <div className="card w-[350px] h-[550px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img  src={props.Zelda} alt="Shoes" className="rounded-xl h-[100%] w-[70%]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{element.nom}</h2>
                            <p>Genre : {element.genre}</p>
                            <p>Quantité : {element.qualite}</p>
                            <div className="card-actions">
                            <button className="btn btn-primary leading-4">Buy Now <br /> ${element.prix}</button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            )
        </div>
    )
}
