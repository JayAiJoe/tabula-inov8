import React from 'react';
import Layout from '../../components/layout';
import { defaultUser, formatDate, FILLERTEXT } from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import FollowLinks from '../../components/followLinks';
import { getDesignerData } from '../../lib/prismaHelpers';
import { withSessionSsr } from '../../lib/config/withSession';
import CarouselCard from '../../components/carouselCard';


  export const getServerSideProps = withSessionSsr(
    async ({req, res}) => {
        const user = req.session.user;

        let texts = req.url.split(/\/|=/);
        const id = texts[texts.length-1];

        const data = await getDesignerData(id);
        // const allProducts = await getGroupBuysByDesigner(id);


        let live = []
        let checks = []
        let drafts = []
        let completed = []


        // data.groupBuys.map((gb) => {
        //     switch(gb.status){
        //         case 0: drafts.push(gb); break;
        //         case 1: checks.push(gb); break;
        //         case 2: live.push(gb); break;
        //         case 3: completed.push(gb); break;
        //     }
        // });

  
        if(!user) {
            return {
                props: {
                    designerData : {username: data.username},
                    session : defaultUser,
                    live: JSON.parse(JSON.stringify(live)),
                    checks: JSON.parse(JSON.stringify(checks)),
                    drafts: JSON.parse(JSON.stringify(drafts)),
                    completed: JSON.parse(JSON.stringify(completed)),
                }
            }
        }
  
        return {
            props: {
                designerData : {username: data.username},
                session : user,
                live: JSON.parse(JSON.stringify(live)),
                checks: JSON.parse(JSON.stringify(checks)),
                drafts: JSON.parse(JSON.stringify(drafts)),
                completed: JSON.parse(JSON.stringify(completed)),
            }
        }
    }
  );




export default function GeneralDesignerPage({designerData,session, live, checks, drafts, completed}) {

    const numGroupBuys = 12;
    const dateString = "2018-05-18T04:00:00.000Z";
    const numLikes = 1023;
    const numDislikes = 23;
    const numFollowers = 4269;

    return (
        <Layout session={session}>
            <div className="mt-8">
            <div className="box ml-24 mr-24" style={{borderRadius:32, backgroundColor:"#2B3239", borderColor:"#54606D", borderWidth:4}}>
                <div className='columns has-text-grey is-vcentered'>
                    <div className='column is-8'>
                        <p className='is-size-3 mb-6' style={{textDecoration:"underline"}}>{designerData.username}</p>
                        <p style={{whiteSpace:"pre-line"}}>{FILLERTEXT}</p>
                    </div>
                    <div className='column is-4'>
                        <p className='is-size-5 mb-2 has-text-white'>Designer Details</p>
                        <p className='is-size-4 mb-1'>{numGroupBuys} completed group buys</p>
                        <p className='is-size-1 mb-1 has-text-white'>{numLikes.toLocaleString()} <FontAwesomeIcon icon={faThumbsUp} style={{color:"#46CC6B"}}/> {numDislikes.toLocaleString()} <FontAwesomeIcon icon={faThumbsDown} style={{color:"#CC4746"}}/></p>
                        <p className='is-size-4 mb-4'>Tabula Partner since {formatDate(dateString)}</p>

                        <FollowLinks designerName={designerData.username} numFollowers={numFollowers}/>


                    </div>
                </div>
            </div>



            <CarouselCard products={live} title={'Live Group Buys'}/>
            <CarouselCard products={checks} title={'Interest Checks'}/>
            <CarouselCard products={drafts} title={'Pending'}/>
            <CarouselCard products={completed} title={'Completed Group Buys'}/>
            </div>
        </Layout>
    );
}

