import React, { useState } from 'react';
import Layout from '../components/layout';
import prisma from '../lib/prisma';
import ProjectCard from '../components/projectCard';
import SearchBar from '../components/searchBar';
import Pagination from '../components/Pagination';
import { useRouter } from 'next/navigation'
import { withSessionSsr } from '../lib/config/withSession';
import { defaultUser } from '../lib/utils';



export const getServerSideProps = withSessionSsr(
  async ({req, res}) => {
      const user = req.session.user;

      const allProducts = await prisma.GroupBuy.findMany({
        include: {
          designer: {select: { username: true },},
          pictures : {select : {path : true}, take : 1},
        }
      });

      if(!user) {
          return {
            props: { session: defaultUser, products: JSON.parse(JSON.stringify(allProducts))}
          }
      }

      return {
          props: { session: user, products: JSON.parse(JSON.stringify(allProducts))}
      }
  }
);


export default function Products({session, products}) {

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
        <div className="mb-20 columns is-multiline ml-20 mr-20" style={{ marginLeft: 10, marginRight: 10}}>
        {products.map((product, index) => (
          <ProjectCard info={product} key={index}/>
        ))}
        </div>
        {/* <Pagination/> */}
        </div>
    </Layout>
  );
}

