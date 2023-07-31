

import Navbar from "./navbar";
import Footer from "./footer";

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({session, children}) {
  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>

      <Navbar session={session}/>
      <main>
        {children}
      </main>
      <Footer/>

    </div>
  );
}