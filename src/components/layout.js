

import Navbar from "./navbar";
import Footer from "./footer";

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({session, children, nav_selected}) {
  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>

      <Navbar session={session} selected={nav_selected}/>
      <main>
        {children}
      </main>
      <Footer/>

    </div>
  );
}