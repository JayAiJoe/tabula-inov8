import Link from 'next/link';
import { PLACEHOLDER_IMAGE, toLowerNoSpace } from '../lib/utils';


export default function FillerProductCard() {

    return (
        <Link href={'/projectUpload'}>
            <div className="card" style={{ marginLeft: 10, marginRight: 10  }}>
                {/* <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={PLACEHOLDER_IMAGE}/>
                    </figure>
                    
                </div> */}
                <div class="card-content">
                    <div class="content" style={{minHeight:100}}>
                    </div>
                </div>
            </div>
        </Link>
    );
  }
