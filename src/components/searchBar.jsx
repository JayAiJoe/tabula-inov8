import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({word, typeHandler, enterHandler}) => {
    return(
        <div className="control has-icons-left" style={{maxWidth:400 , margin:"auto", borderRadius:"50%", marginBottom: "2rem"}}>
            <input className="input is-small is-rounded" type="search" placeholder="Search" value={word} onChange={typeHandler} onKeyDown={enterHandler}/>
            <FontAwesomeIcon icon={faSearch} style={{position:"absolute", bottom:12, color:"#929ebb", left:20}}/>
        </div>
    );
}

export default SearchBar;