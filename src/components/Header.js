import { useState } from "react";

function Header({onSearch}){
    const [city,setCity]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(city.trim()!==""){
            onSearch(city);
        }
    };
    return(
        <div className="Header">
          <nav className="navbar" style={{ backgroundColor: "transparent" }}>
            <h2 className="navbar-brand text-light">Weather App</h2>
            <form className="form-inline" onSubmit={handleSubmit}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => setCity(e.target.value)} />
              <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
           </nav>
        </div>
    );
}
export default Header;