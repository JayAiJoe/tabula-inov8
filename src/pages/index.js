import React, { useState } from 'react';
import Layout from '../components/layout';
import CarouselCard from '../components/carouselCard';
import prisma from '../lib/prisma';
import ProjectCard from '../components/projectCard';
import SearchBar from '../components/searchBar';
import Pagination from '../components/Pagination';
import { useRouter } from 'next/navigation'
import { withSessionSsr } from '../lib/config/withSession';
import { defaultUser } from '../lib/utils';
import DesignerCarousel from '../components/designerCarousel';



export const getServerSideProps = withSessionSsr(
  async ({req, res}) => {
      const user = req.session.user;

      const allProducts = await prisma.GroupBuy.findMany({
        include: {
          designer : {select : { id : true, username : true, groupBuys: true, followers: true,},},
          pictures : {select : {path : true}, take : 1}
        },
        where: {
          OR:[
            {status : 1},
            {status : 2}
          ]
        }
      });


      let live = []
      let checks = []
      let trendingDesigners = []

      allProducts.map((gb) => {
          switch(gb.status){
              case 1: checks.push(gb); break;
              case 2: live.push(gb); break;
          }

          trendingDesigners.push(gb.designer);

      });

      // let personal = [];

      // allProducts.map((gb) => {
      //     if(gb.status){
      //       personal.push(gb);
      //     }
      // });

      if(!user) {
          return {
            props: { 
              session: defaultUser, 
              live: JSON.parse(JSON.stringify(live)),
              checks: JSON.parse(JSON.stringify(checks)),
              designers : JSON.parse(JSON.stringify(trendingDesigners)),
            }
          }
      }

      return {
          props: { 
            session: user, 
            live: JSON.parse(JSON.stringify(live)),
            checks: JSON.parse(JSON.stringify(checks)),
            designers : JSON.parse(JSON.stringify(trendingDesigners)),
          }
      }
  }
);


export default function Index({session, live, checks, designers}) {

  const [searchWord, setSearchWord] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        const encodedQuery = encodeURI(searchWord);
        router.push(`/search?q=${encodedQuery}`);
    }
  };

  return (
    <Layout session={session} >
      <div className="mt-8">
        <SearchBar word={searchWord} typeHandler={handleChange} enterHandler={handleKeyDown}/>
        {/* {session.id == '000'? <div/> : <CarouselCard products={checks} labels={{title:'Interest Checks', subtitle:''}}/>} */}
        <CarouselCard products={checks} title={'Interest Checks'}/>
        <CarouselCard products={live} title={'Live Group Buys'}/>
        <DesignerCarousel designers={designers} title={'Trending Designers'}/>
        {/* <Pagination/> */}
        </div>
    </Layout>
  );
}

