import { parseISO } from 'date-fns';
import Link from 'next/link';
import { PLACEHOLDER_IMAGE, toLowerNoSpace } from '../lib/utils';
import ReactTimeAgo from 'react-time-ago'
import { DANGER_THRESHOLD, STATUS, formatDateUS, STATUS_COLORS, isDateFinished} from '../lib/utils';


  
const ProjectCard = ({info, freeSize = true}) => {
    return(
        <div className={"column " + (freeSize? "is-3-desktop is-6-tablet" : "")} >
            <Link href={`/projects/${info.id}`}>
            <div className="card" style={{borderRadius: 8 }}>
                
                <div className="card-image">
                    

                    <figure className="image is-3by2">
                    <img src={info.pictures ? info.pictures[0].path : PLACEHOLDER_IMAGE}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = PLACEHOLDER_IMAGE;
                        }}
                    />
                    </figure>
                    
                </div>
                <div className="card-content">
                
                    <div className="media mb-2 ">
                        <div className="media-content">
                            <p className="title is-4 mb-0">{info.name}</p>
                            <p className="subtitle is-6">{info.designer.username}</p>
                            
                        </div>
                    </div>
                    <div className="content">
                        <p className='mr-2 is-size-6'>
                            {/* <span className={(info.maxUnits - info.currentUnits < DANGER_THRESHOLD 
                            ? "has-text-danger"
                            : "") }
                            >{info.maxUnits - info.currentUnits} units left </span> */}
                            {info.status == 0 && <span>Submitted </span>}

                            {info.status == 1 && (isDateFinished(info.icDeadline)
                                ? <span className='has-text-danger'>IC Ended </span>
                                :  <span>IC Ends: {formatDateUS(info.icDeadline)} </span>
                            )}



                            {info.status == 2 && <span>{info.maxUnits - info.currentUnits} units left </span>}
                            {info.status == 3 && <span className='has-text-success'>Very Positive </span>}
                            {info.status > 0 && <span> • </span>}

                            {<ReactTimeAgo date={parseISO(info.submitDate)} locale="en-US"/>}

                        </p>

                    </div>
                </div>
                <div className={"tag is-small " + STATUS_COLORS[info.status]} style={{position:"absolute",top:'2%',right:'2%', borderRadius:8, minWidth: 120, fontWeight:600}}>{STATUS[info.status]}</div>
            </div>
            </Link>
        </div>

    );
}

export default ProjectCard;