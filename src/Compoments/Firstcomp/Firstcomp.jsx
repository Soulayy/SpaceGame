import "./Firstcomp.css";


export default function Firstcomp(props) {

    let pics = [props.Zelda, props.RDR, props.Cyber, props.Mario, props.Witcher, props.Fortnite, props.Harry, props.Tekken, props.Mincraft, props.FinalF, props.Assasin, props.GrandV]
    let p = 0
    

     

    return (
        <div className="h-[90%] w-[70%] flex justify-center items-center flex-wrap gap-10 pt-28">
            
            {
                props.Data.map((element, key) => {
                    return(
                    <div key={key} className="card w-[315px] h-[500px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img  src={element.src} alt="Shoes" className="rounded-xl h-[100%] w-[70%]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{element.nom}</h2>
                            <p>Genre : {element.genre}</p>
                            <p>Quantité : {element.quantite} {element.quantite == 0 && props.setEmpty(true)}</p>
                            <div className="card-actions">
                            <button disabled={props.empty} onClick={() => (props.ajout(), (props.moins(element), (props.setMonny(props.monny+element.prix))))} >Buy Now <br /> ${element.prix}</button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            
        </div>
    )
}
