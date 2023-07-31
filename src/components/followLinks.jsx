import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, squareInstagram } from '@fortawesome/free-brands-svg-icons';

const FollowLinks = ({designerName, numFollowers}) => {
    return(
        <div className='columns'>
            <div className='column is-3'> 
                <p className='has-text-grey' style={{fontSize:12, whiteSpace:"nowrap", fontWeight:"semi-bold"}}>FOLLOW DESIGNER</p>
                <p className='has-text-white' style={{fontSize:12}}>{numFollowers.toLocaleString()} Followers</p>
            </div>
            <div className='column is-9'> 
                <div className="buttons" style={{maxHeight:36}}>
                    <button className='mb-auto mr-1' style={{maxHeight:36, borderRadius:4, border:"none", height:36, fontSize:14, fontWeight:600}}>{designerName} <FontAwesomeIcon icon={faHeart} className='ml-1'/></button>
                    <button className='mb-auto mr-2' style={{maxHeight:36, maxWidth:36, background:"none", border:"none", marginTop:-4}}><FontAwesomeIcon className="has-text-grey" icon={faSquareFacebook} style={{fontSize:"2.5rem"}}/></button>
                    <button className='mb-auto mr-2' style={{maxHeight:36, maxWidth:36, background:"none", border:"none", marginTop:-4}}><FontAwesomeIcon className="has-text-grey" icon={faSquareInstagram} style={{fontSize:"2.5rem"}}/></button>
                    <button className='mb-auto' style={{maxHeight:36, maxWidth:36, background:"none", border:"none", marginTop:-4}}><FontAwesomeIcon className="has-text-grey" icon={faSquareTwitter} style={{fontSize:"2.5rem"}}/></button>
                </div>
            </div>
        </div>
    );
}

export default FollowLinks;