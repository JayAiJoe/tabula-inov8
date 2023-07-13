import { parseISO } from 'date-fns';
import Link from 'next/link';
import { PLACEHOLDER_IMAGE, toLowerNoSpace } from '../lib/utils';
import ReactTimeAgo from 'react-time-ago'
import { DANGER_THRESHOLD, STATUS } from '../lib/utils';


function getStatusTag(code) {
    switch(code) {
      case 0:
        return "tag is-warning is-medium";
    case 1:
        return "tag is-link is-medium";
    case 2:
        return "tag is-info is-medium";
    }
  }


export default function ProductCard({ info }) {

    return (
        <Link href={`/projects/${info.id}`}>
            <div className="card" style={{ marginLeft: 10, marginRight: 10  }}>
                
                <div className="card-image">
                    

                    <figure className="image is-4by3">
                    <img src={`/images/${toLowerNoSpace(info.name)}/1.png`}
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
                            <p className="subtitle is-5">{info.designer.name}</p>
                            
                        </div>
                    </div>
                    <div className="content">
                        {/* <progress 
                            className="progress is-info"
                            value={info.takenUnits} max={info.maxUnits}/> */}
                        

                        <span className='mr-2'>
                            <span className={(info.maxUnits - info.takenUnits < DANGER_THRESHOLD 
                            ? "has-text-danger"
                            : "") }
                            >{info.maxUnits - info.takenUnits} units left </span>
                            • {<ReactTimeAgo className="ml-2" date={parseISO(info.createdAt)} locale="en-US"/>}

                        </span>
                    </div>
                </div>
                <div className={getStatusTag(info.status)} style={{position:"absolute",top:'2%',right:'2%'}}>{STATUS[info.status]}</div>
            </div>
        </Link>
    );
  }
