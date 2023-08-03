import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LogInBox } from "./loginBox";
import { useRouter } from "next/router";


const selected_style = "has-background-dark has-text-white is-rounded";

const Navbar = ({session, selected}) => {
  const router = useRouter();
  const[login, setLog] = useState(false);

  

  const toggleSignIn = () => {
    setLog(!login);
  }

  const logOut = async() => {
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      return router.push("/");
    }
  };

    return(
        <>
            <section className="is-relative has-background-white is-clipped"><nav className="navbar has-background-white" style={{zIndex: 100,borderBottom: '1px solid #CFD5E2'}}>
                <div className="navbar-brand is-align-items-center" style={{minWidth:210}}>
  
                    <a className="pl-8 navbar-item" href="/">

                    <img className='image' width="64" height="64" style={{minHeight: 64}} src="/images/keyboard_key_t.png"/>
                    <span className="is-size-3">abula</span>
                    </a>

  <a className="navbar-burger navbar-menu-open is-flex-touch is-align-items-center is-justify-content-center" role="button">
    <svg className="has-text-dark" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15.4688H0V17.7207H18V15.4688Z" fill="currentColor"></path><path d="M11.0226 7.87402H0V10.126H11.0226V7.87402Z" fill="currentColor"></path><path d="M18 0.279297H0V2.53127H18V0.279297Z" fill="currentColor"></path></svg></a>
  </div>
  <div className="navbar-menu ml-10 is-align-items-center">
    <div className="navbar-start" style={{width: '100%'}}>
      <div className="ml-auto"/>
      <Link className={"navbar-item " + (selected == "Home" ? selected_style : "")}  href="/" >Home</Link>
      <Link className={"navbar-item " + (selected == "Products" ? selected_style : "")} href="/products">Products</Link>
      <Link className={"navbar-item " + (selected == "Designers" ? selected_style : "")} href="/designers">Designers</Link>
      {session?.isDesigner && 
        <>
          <Link className={"navbar-item " + (selected == "New Project" ? selected_style : "")} href="/projectUpload">New Project</Link>
          <Link className={"navbar-item " + (selected == "Dashboard" ? selected_style : "")} href="/designerPage">Dashboard</Link>
        </>
      }
      <div className="mr-auto"/>
    </div>


    

    


    <div className="navbar-end" style={{minWidth:300}}>
      <div className="has-text-right mr-8">
        <p className="is-size-5 has-text-black mr-1" style={{whiteSpace:"nowrap", overflow:"ellipsis", fontWeight:600}}>Hello, {session.username}</p>
        {(!session || session.id == "000") 
        ? <button className="is-size-6" onClick={toggleSignIn} style={{background:"none", border:"none"}}>Sign In</button>
        : <button className="is-size-6" onClick={logOut} style={{background:"none", border:"none"}}>Log Out</button>
        }
      </div>
      
    </div>
  </div>
  </nav>
</section>



    <div className={"modal full-width ml-auto mr-auto " + (login? "is-active":"")} style={{zIndex:2000}}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <LogInBox callback={toggleSignIn}/>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={toggleSignIn}></button>
    </div>
    </>
    );
}

export default Navbar;