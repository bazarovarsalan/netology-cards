import { FC } from 'react'
import '../App.css'
import PropsChildren from "../assets/types"


const Card: FC<PropsChildren> = ({title, image, link, description}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card">
        {image &&  <img src={image} className="card-img" alt={title}/>}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
  )
}


export default Card