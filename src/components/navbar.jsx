import React from "react";
import Link from "next/link";

const Navbar = () => {
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
      {/* <div className="mr-10 pl-8 pr-6 is-hidden-touch-only is-hidden-desktop-only is-hidden-widescreen-only is-flex-fullhd has-background-white is-align-items-center" style={{borderRadius: '6px'}}>
        </div> */}
      <Link className="navbar-item ml-auto" href="/">Home</Link>
      <Link className="navbar-item" href="/">Shop</Link>
      
      {/* <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="/">
        Shop
        </a>
        <div className="navbar-dropdown is-boxed navidown" style={{zIndex: 20000}}>
            <a className="navbar-item" >
                Group Buys
            </a>
            <a className="navbar-item" >
                Designers
            </a>
            <hr className="navbar-divider"/>
            <a className="navbar-item" >
                Keyboards
            </a>
            <a className="navbar-item" >
                Keycaps
            </a>
            <a className="navbar-item" >
                Others
            </a>
        </div>
    </div> */}
      
      <Link className="navbar-item" href="/projectUpload">New Project</Link>
      <Link className="navbar-item mr-auto" href="/designerDashboard">Dashboard</Link>
    </div>
    <div className="navbar-end" style={{minWidth:210}}>

      {/* <a className="navbar-item is-flex is-align-items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-3"><path d="M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z"></path></svg><span className="is-inline-flex is-align-items-center is-justify-content-center has-background-white has-text-weight-bold" style={{width: '24px', height: '24px', borderRadius: '50% !important'}}>3</span>
      </a> */}
      <a className="navbar-item pr-10 is-flex is-align-items-center is-align-self-stretch has-text-weight-bold" href="#">
        <svg className="mr-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span>Sign In</span>
      </a>
    </div>
  </div>
  </nav><div className="navbar-side has-mw-sm is-hidden is-fixed is-top-0 is-bottom-0 is-left-0 is-right-0" style={{zIndex: 10, width: '100%'}}>
  <div className="navbar-backdrop is-fixed is-top-0 is-bottom-0 is-left-0 has-background-dark is-fullwidth" style={{height: '100%', width: '100%', opacity: '25%'}}></div>
  <nav className="px-6 py-6 is-flex is-relative has-background-white is-flex-direction-column is-fullwidth" style={{height: '100%', width: '100%'}}><div className="mb-8 is-flex is-align-items-center">
    <a className="mr-auto is-size-4" href="#">
      <img className="image" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto"/></a>
    <button className="navbar-close button p-0" style={{border: 'none'}}>
      <svg style={{width: '8px', height: '8px'}} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
    </div>
    <div className="mb-8 is-flex is-justify-content-space-between">
      <a className="navbar-item p-0 is-inline-flex is-align-items-center has-text-weight-bold" href="#">
        <svg className="mr-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span>Sign In</span>
      </a>
      <div className="is-flex is-align-items-center">
        <a className="navbar-item p-0 mr-6" href="#">
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
        <a className="navbar-item p-0 is-flex is-align-items-center" href="#">
          <svg className="mr-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="is-inline-block has-background-light is-rounded has-text-weight-bold has-text-centered" style={{width: '24px', height: '24px', borderRadius: '50% !important'}}>3</span>
        </a>
      </div>
    </div>
    <input className="input mb-10 has-background-light" style={{border: 'none'}} type="search" placeholder="Search"/><ul className="mb-0 is-size-4"><li className="mb-8"><a className="has-text-dark has-text-weight-semibold is-size-4" href="#">Home</a></li>
    <li className="mb-8"><a className="has-text-dark has-text-weight-semibold is-size-4" href="#">Shop</a></li>
    <li className="mb-8"><Link className="has-text-dark has-text-weight-semibold is-size-4" href="/projectUpload">New Project</Link></li>
    <li className="mb-8"><Link className="has-text-dark has-text-weight-semibold is-size-4" href="/projectUpload">Dashboard</Link></li>
    <li><a className="has-text-dark has-text-weight-semibold is-size-4" href="#">Brand</a></li>
    </ul></nav></div>
</section>
    </>
    );
}

export default Navbar;