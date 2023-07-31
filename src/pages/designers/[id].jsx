import React from 'react';
import Layout from '../../components/layout';
import DashboardCarousel from '../../components/dashboardCarousel';
import { defaultUser, formatDate } from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import FollowLinks from '../../components/followLinks';
import { getGroupBuysByDesigner, getDesignerData } from '../../lib/prismaHelpers';
import { withSessionSsr } from '../../lib/config/withSession';


  export const getServerSideProps = withSessionSsr(
    async ({req, res}) => {
        const user = req.session.user;

        let texts = req.url.split("/");
        const id = texts[texts.length-1];

        const data = await getDesignerData(id);
        const allProducts = await getGroupBuysByDesigner(id);


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
                    designerData : data,
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
                designerData : data,
                session : user,
                live: JSON.parse(JSON.stringify(live)),
                checks: JSON.parse(JSON.stringify(checks)),
                drafts: JSON.parse(JSON.stringify(drafts)),
                completed: JSON.parse(JSON.stringify(completed)),
            }
        }
    }
  );




export default function DesignerPage({session, live, checks, drafts, completed, designerData}) {

    const text = "Introducing the Epic Keyboards Collection from ProKeys! Elevate Your Typing Experience to the Next Level!\n\n Hey there, keyboard enthusiasts and tech aficionados! Are you ready to dive into a world of premium typing experiences and cutting-edge design? Look no further, because ProKeys is here to redefine your keyboard game! \n\nCraftsmanship at its Finest:\nGet ready to be wowed! Our keyboards are meticulously designed by a team of passionate keyboard lovers, combining sleek aesthetics with functionality. Each model is a masterpiece, crafted to perfection.\n\nStyle Meets Comfort:\nSay goodbye to clunky and uncomfortable keyboards! With ProKeys, you'll experience an ergonomic design that keeps your hands happy during those long typing sessions. Your comfort matters, and we've got you covered!";
    const numGroupBuys = 12;
    const dateString = "2018-05-18T04:00:00.000Z";
    const numLikes = 1023;
    const numDislikes = 23;
    const numFollowers = 4269;

    console.log("designer data", designerData);

    return (
        <Layout session={session}>
            <div className="mt-8">
            <div className="box ml-24 mr-24" style={{borderRadius:32, backgroundColor:"#2B3239", borderColor:"#54606D", borderWidth:4}}>
                <div className='columns is-vcentered has-text-grey '>
                    <div className='column is-8'>
                        <p className='is-size-3 mb-6' style={{textDecoration:"underline"}}>{designerData.username}</p>
                        <p style={{whiteSpace: "pre-line"}}>{text}</p>
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



            <DashboardCarousel products={live} title={'Live Group Buys'}/>
            <DashboardCarousel products={checks} title={'Interest Checks'}/>
            {/* <DashboardCarousel products={drafts} title={'Pending'}/> */}
            <DashboardCarousel products={completed} title={'Completed Group Buys'}/>
            </div>
        </Layout>
    );
}

