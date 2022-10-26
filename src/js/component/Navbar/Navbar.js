import React, {useContext} from 'react'
import { Context } from "../../store/appContext.js";

const Navbar = () => {
  const {store, actions} = useContext(Context);

  return (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {store.favorite.map((item, index) =>{
            return (
              <li key={index} className="dropdown-item">
                {item}
              </li>
            )
            })}
        </ul>
    </div>
  )
}

export default Navbar;