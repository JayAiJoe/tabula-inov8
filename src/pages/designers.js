import React, { useState } from 'react';
import Layout from '../components/layout';
import SearchBar from '../components/searchBar';
import { useRouter } from 'next/navigation'
import { withSessionSsr } from '../lib/config/withSession';
import { defaultUser } from '../lib/utils';
import DesignerCard from '../components/designerCard';
import { getAllDesignerStats } from '../lib/prismaHelpers';

export const getServerSideProps = withSessionSsr(
  async ({req, res}) => {
      const user = req.session.user;

      const allDesigners = await getAllDesignerStats();

      if(!user) {
          return {
            props: { session: defaultUser, designers: JSON.parse(JSON.stringify(allDesigners))}
          }
      }

      return {
          props: { session: user, designers: JSON.parse(JSON.stringify(allDesigners))}
      }
  }
);


export default function Designers({session, designers}) {

  const [searchWord, setSearchWord] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        const encodedQuery = encodeURI(searchWord);
        router.push(`/searchDesigners?q=${encodedQuery}`);
    }
  };

  return (
    <Layout session={session} >
      <div className="mt-8">
        <SearchBar word={searchWord} typeHandler={handleChange} enterHandler={handleKeyDown}/>
        <div className="mb-20 columns is-multiline ml-20 mr-20" style={{ marginLeft: 10, marginRight: 10}}>
        {designers.map((designer, index) => (
          <DesignerCard info={designer} key={index}/>
        ))}
        </div>
        {/* <Pagination/> */}
        </div>
    </Layout>
  );
}

