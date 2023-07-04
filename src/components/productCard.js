import ReactTimeAgo from 'react-time-ago'
import { parseISO } from 'date-fns';
import Link from 'next/link';
import { toLowerNoSpace } from '../lib/utils';


function getStatusText(code) {
    switch(code) {
      case 0:
        return "Interest Check";
    case 1:
        return "In Production";
    case 2:
        return "Pending";
    }
  }

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
                    

                    <figure class="image is-4by3">
                    <img src={`/images/${toLowerNoSpace(info.name)}/1.png`}/>
                    </figure>
                    
                </div>
                <div className="card-content">
                
                    <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{info.name}</p>
                        <p className="subtitle is-6">{info.designer.name}</p>
                        
                    </div>
                    </div>
                    <div className="content">
                        <progress 
                            className="progress is-info"
                            value={info.takenUnits} max={info.maxUnits}/>
                        
                        <span>{info.maxUnits - info.takenUnits} units left • 
                          {<ReactTimeAgo className="ml-2" date={parseISO(info.createdAt)} locale="en-US"/>}
                        </span>
                    </div>
                </div>
                <div className={getStatusTag(info.status)} style={{position:"absolute",top:'2%',right:'2%'}}>{getStatusText(info.status)}</div>
            </div>
        </Link>
    );
  }
