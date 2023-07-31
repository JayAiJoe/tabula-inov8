import { useRouter } from "next/router";
import { useState } from 'react'


export const LogInBox = ({callback}) => {
    const router = useRouter();

    const [emailText, setEmailText] = useState("");
    const [passText, setPassText] = useState("");

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [bill1, setBill1] = useState("");
    const [bill2, setBill2] = useState("");


    const [wrong, setWrong] = useState(false);

    const [login, setLogin] = useState(true);

    function resetInputs() {
        setEmailText("");
        setPassText("");
    }

    function toggleForm(){
        setLogin(!login);
    }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailText;
    const password = passText;

    const response = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        resetInputs();
        setWrong(false);
        callback();
        return router.push("/");
    }
    else{
        setWrong(true);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // const email = emailText;
    // const password = passText;

    // const response = await fetch("/api/sessions", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password })
    // });

    // if (response.ok) {
    //     resetInputs();
    //     setWrong(false);
    //     callback();
    //     return router.push("/");
    // }
    // else{
    //     setWrong(true);
    // }
  };

    return (
        <div className="box ml-auto mr-auto" style={{borderRadius:0, width:450}}>
            {login &&
                <>
                <p className="is-size-4 has-text-centered" style={{fontWeight:900}}>SIGN IN</p>

                <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label has-text-black is-size-6">Email Address</label>
                    <div className="control">
                    <input 
                        value={emailText}
                        onChange={e=>setEmailText(e.target.value)}
                        className="input has-text-white is-small" 
                        type="text" 
                        style={{background:"#2B3239", borderRadius:0, borderColor:"#54606D", padding:8}}
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-black is-size-6">Password</label>
                    <div className="control">
                    <input 
                        value={passText}
                        onChange={e=>setPassText(e.target.value)}
                        className="input has-text-white is-small" 
                        type="password" 
                        style={{background:"#2B3239", borderRadius:0, borderColor:"#54606D", padding:8}}
                    />
                    </div>
                </div>

                <div className="has-text-danger has-text-centered" style={{minHeight:40, fontWeight:600}}>{wrong && "Invalid email or password."}</div>

                <div className="has-text-centered"><button type="submit" className="button is-small is-centered ml-auto mr-auto" style={{fontWeight:600}}>SIGN IN</button></div>
                </form>
                
                <div className="has-text-centered mt-4" style={{fontWeight:600}}>DON'T HAVE AN ACCOUNT YET? <span className="has-text-info" style={{textDecoration:"underline"}} onClick={toggleForm}>SIGN UP</span></div>
                </>
            }


            {!login &&
                <>
                <p className="is-size-4 has-text-centered" style={{fontWeight:900}}>SIGN UP</p>

                <form onSubmit={handleSignUp}>
                <div className="field">
                    <label className="label has-text-black is-size-6">Email Address</label>
                    <div className="control">
                    <input 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        className="input has-text-white is-small" 
                        type="text" 
                        style={{background:"#2B3239", borderRadius:0, borderColor:"#54606D", padding:8}}
                    />
                    </div>
                </div>


                <div className="field">
                    <label className="label has-text-black is-size-6">Username</label>
                    <div className="control">
                    <input 
                        value={username}
                        onChange={e=>setUsername(e.target.value)}
                        className="input has-text-white is-small" 
                        type="text" 
                        style={{background:"#2B3239", borderRadius:0, borderColor:"#54606D", padding:8}}
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-black is-size-6">Password</label>
                    <div className="control">
                    <input 
                        value={pass}
                        onChange={e=>setPass(e.target.value)}
                        className="input has-text-white is-small" 
                        type="password" 
                        style={{background:"#2B3239", borderRadius:0, borderColor:"#54606D", padding:8}}
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-black is-size-6">Confirm Password</label>
                    <div className="control">
                    <input 
                        value={pass2}
                        onChange={e=>setPass2(e.target.value)}
                        className="input has-text-white is-small" 
                        type="password" 
                        style={{background:"#2B3239", borderRadius:0, borderColor:"#54606D", padding:8}}
                    />
                    </div>
                </div>


                <div className="field">
                    <label className="label has-text-black is-size-6">Billing Address Line 1</label>
                    <div className="control">
                    <input 
                        value={bill1}
                        onChange={e=>setBill1(e.target.value)}
                        className="input has-text-white is-small" 
                        type="text" 
                        style={{background:"#2B3239", borderRadius:0, borderColor:"#54606D", padding:8}}
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-black is-size-6">Billing Address Line 2</label>
                    <div className="control">
                    <input 
                        value={bill2}
                        onChange={e=>setBill2(e.target.value)}
                        className="input has-text-white is-small" 
                        type="text" 
                        style={{background:"#2B3239", borderRadius:0, borderColor:"#54606D", padding:8}}
                    />
                    </div>
                </div>

                <div className="has-text-danger has-text-centered" style={{minHeight:40, fontWeight:600}}>{wrong && "Invalid email or password."}</div>

                <div className="has-text-centered"><button type="submit" className="button is-small is-centered ml-auto mr-auto" style={{fontWeight:600}}>SIGN UP</button></div>
                </form>
                
                <div className="has-text-centered mt-4" style={{fontWeight:600}}>ALREADY HAVE AN ACCOUNT? <span className="has-text-info" style={{textDecoration:"underline"}} onClick={toggleForm}>SIGN IN</span></div>
                </>
            }
        </div>
    );
};