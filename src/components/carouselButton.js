import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CarouselButton({ direction }) {
    return <button className="button is-static" style={{display:'flex', height:'100%', border:'none', outline:'none', background:'none'}}>
        {direction > 0 ? 
        <span className="icon"><FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-right"/></span>
        :
        <span className="icon"><FontAwesomeIcon icon={faArrowLeft} className="fas fa-arrow-left"/></span>
        }
    </button>;
  }