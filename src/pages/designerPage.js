import React from 'react';
import Layout from '../components/layout';
import { defaultUser, formatDate, FILLERTEXT } from '../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import FollowLinks from '../components/followLinks';
import { getGroupBuysByDesigner } from '../lib/prismaHelpers';
import { withSessionSsr } from '../lib/config/withSession';
import CarouselCard from '../components/carouselCard';


export const getServerSideProps = withSessionSsr(
    async ({req, res}) => {
        const user = req.session.user;

        const allProducts = await getGroupBuysByDesigner(user.id);


        let live = []
        let checks = []
        let drafts = []
        let completed = []

        allProducts.map((gb) => {
            switch(gb.status){
                case 0: drafts.push(gb); break;
                case 1: checks.push(gb); break;
                case 2: live.push(gb); break;
                case 3: completed.push(gb); break;
            }
        });
  
        if(!user) {
            return {
                props: {
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
                session : user,
                live: JSON.parse(JSON.stringify(live)),
                checks: JSON.parse(JSON.stringify(checks)),
                drafts: JSON.parse(JSON.stringify(drafts)),
                completed: JSON.parse(JSON.stringify(completed)),
            }
        }
    }
  );



export default function DesignerPage({session, live, checks, drafts, completed}) {

    const text = "Hi, here's Owlab again :)As some of you may know, we just launched our second project of the year - Link65. Thanks to all the support from our customers, the sale went smoothly, and we have started to fulfill orders earlier this week.\n\nWhile working on innovative designs at affordable costs, we always want to bring up some small-factor gadgets. However, layouts under 60% are niche in this community and will lead to much higher price tags, so we were not brave enough to step up. Luckily, we were able to partner with Tabula which has helped us further expand our reach! Please continue to look forward to our products here!"
    const numGroupBuys = 12;
    const dateString = "2018-05-18T04:00:00.000Z";
    const numLikes = 1023;
    const numDislikes = 23;
    const numFollowers = 4269;

    return (
        <Layout session={session} nav_selected={"Dashboard"}>
            <div className="mt-8">
            <div className="box ml-24 mr-24" style={{borderRadius:32, backgroundColor:"#2B3239", borderColor:"#54606D", borderWidth:4}}>
                <div className='columns has-text-grey is-vcentered'>
                    <div className='column is-8'>
                        <p className='is-size-3 mb-6' style={{textDecoration:"underline"}}>{session.username}<FontAwesomeIcon icon={faPenToSquare} className='ml-2'/></p>
                        <p style={{whiteSpace:"pre-line"}}>{FILLERTEXT}</p>
                    </div>
                    <div className='column is-4'>
                        <p className='is-size-5 mb-2 has-text-white'>Designer Details</p>
                        <p className='is-size-4 mb-1'>{numGroupBuys} completed group buys</p>
                        <p className='is-size-1 mb-1 has-text-white'>{numLikes.toLocaleString()} <FontAwesomeIcon icon={faThumbsUp} style={{color:"#46CC6B"}}/> {numDislikes.toLocaleString()} <FontAwesomeIcon icon={faThumbsDown} style={{color:"#CC4746"}}/></p>
                        <p className='is-size-4 mb-4'>Tabula Partner since {formatDate(dateString)}</p>

                        <FollowLinks designerName={session.username} numFollowers={numFollowers}/>


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

