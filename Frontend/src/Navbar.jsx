import React from 'react';
import "./Navbar.css"

function Navbar() {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg bg-body-light sticky-top custom" style={{height:"10vh"}}>
            <div class="container-fluid">
                <a class="navbar-brand nav-item" href="#" style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src="/Logo.png" alt="" style={{height:"7vh"}}/><h3 className='ms-3'> TESLA - SJCE </h3></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mt-1" id="navbarNav" style={{width:"100%",color:"#ffffff"}}>
                <ul class="navbar-nav ms-lg-auto me-lg-5">
                    <li class="nav-item a1" style={{marginRight:"5rem"}}>
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item a1" style={{marginRight:"5rem"}}>
                    <a class="nav-link active" href="#">About</a>
                    </li>
                    <li class="nav-item a1" style={{marginRight:"5rem"}}>
                    <a class="nav-link active" href="#">Events</a>
                    </li>
                    <li class="nav-item a1" style={{marginRight:"5rem"}}>
                    <a class="nav-link active" href="#">Team</a>
                    </li>
                    <li class="nav-item a1 sa" style={{marginRight:"2.5rem"}}>
                    <a class="nav-link active" href="#">Developers</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
     );
}

export default Navbar;