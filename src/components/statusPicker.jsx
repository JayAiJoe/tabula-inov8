import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const StatusPicker = () => {

    const [active, setActive] = useState(false);
    const [status, setStatus] = useState("Interest Check");

    function toggleActive(){
        setActive(!active);
    }

    return(
        <div className="level-left">
            <p className="level-item is-size-4 has-text-grey">Status: </p>
            <div className={"level-item dropdown " + (active? "is-active":"" )}>
            <div className="dropdown-trigger">
                <button className="button is-small is-info has-text-white" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={toggleActive} 
                style={{background:"#909EBB",borderRadius:0, minWidth:200}}>
                <span>{status}</span>
                <FontAwesomeIcon className="has-text-black ml-4" icon={faChevronDown} style={{}}/>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content" style={{borderRadius:0}}>
                <div className="dropdown-item" onClick={() => {setStatus("Interest Check"), setActive(false)}}>
                    <p>Interest Check</p>
                </div>
                <hr className="dropdown-divider" style={{color:"#212529", backgroundColor:"#212529", height:2}}/>
                <div className="dropdown-item" onClick={() => {setStatus("Group Buy"), setActive(false)}}>
                    <p>Group Buy</p>
                </div>
                <hr className="dropdown-divider" style={{color:"#212529", backgroundColor:"#212529", height:2}}/>
                <div className="dropdown-item" onClick={() => {setStatus("Closed"), setActive(false)}}>
                    <p>Closed</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default StatusPicker;