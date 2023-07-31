import Link from 'next/link';


  
const DesignerCard = ({info, freeSize = true}) => {
    return(
        <div className={"column " + (freeSize? "is-3-desktop is-6-tablet" : "")} >
            <Link href={`/designers/${info.id}`}>
            <div className="card" style={{borderRadius: 8 }}>
                <div className="card-content">

                    <div className="content">
                        <p className="title is-4 mb-0">{info.username}</p>
                        <p className="subtitle is-5">{info.groupBuys.length} group buys • {info.followers.length + 896} followers</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>

    );
}

export default DesignerCard;