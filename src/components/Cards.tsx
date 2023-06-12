import PropsChildren from "../assets/types"
import { FC } from "react"

const Cards: FC<PropsChildren>  = (props) => {
  return (
    <div className="container">
        <div className="row flex-row cards">
            {props.children}
        </div>
    </div>
  )
}

export default Cards
