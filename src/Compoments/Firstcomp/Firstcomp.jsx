import "./Firstcomp.css";


export default function Firstcomp(props) {

    let pics = [props.Zelda, props.RDR, props.Cyber, props.Mario, props.Witcher, props.Fortnite, props.Harry, props.Tekken, props.Mincraft]
    let p = 0
    

     

    return (
        <div className="h-[90%] w-[90%] flex justify-center items-center flex-wrap gap-10">
            
            {
                props.Data.map((element, key) => {
                    return(
                    <div key={key} className="card w-[350px] h-[550px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img  src={pics[p++]} alt="Shoes" className="rounded-xl h-[100%] w-[70%]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{element.nom}</h2>
                            <p>Genre : {element.genre}</p>
                            <p>Quantité : {element.quantite} {element.quantite == 0 && props.setEmpty(true)}</p>
                            <div className="card-actions">
                            <button disabled={props.empty} onClick={() => (props.ajout(), (props.moins(element), (props.setMonny(props.monny+element.prix))))} className="btn btn-primary leading-4">Buy Now <br /> ${element.prix}</button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            
        </div>
    )
}
