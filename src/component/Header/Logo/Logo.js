import headPhoto from "../../../assets/logo/logoHead.png"
import cd from './Logo.module.css'

let Logo = () =>{
    return(
        <div>
            <img src={headPhoto}  className= {(`${cd.img} ${cd.logo}`)}/>
        </div>
    )
}

export default Logo