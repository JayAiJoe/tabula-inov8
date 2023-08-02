import Layout from "../components/layout";
import SearchBar from "../components/searchBar";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ProjectCard from "../components/projectCard";
import useSWR from 'swr';
import { LoadingAnimation } from "../components/loadingAnimation";
import { withSessionSsr } from "../lib/config/withSession";
import { defaultUser } from "../lib/utils";



const fetchPosts = async (url) => {
    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Failed to fetch posts");
    }

    return response.json();
}


export const getServerSideProps = withSessionSsr(
    async ({req, res}) => {
        const user = req.session.user;
  
        if(!user) {
            return {
              props: { session: defaultUser}
            }
        }
  
        return {
            props: { session: user}
        }
    }
  );



export default function Search({session}) {

    const [searchWord, setSearchWord] = useState('');
    const router = useRouter();
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    

    const encodedSearchQuery = encodeURI(searchQuery || "");
    const {data, isLoading} = useSWR(`api/search?q=${encodedSearchQuery}`, fetchPosts);

    const handleChange = (event) => {
        setSearchWord(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const encodedQuery = encodeURI(searchWord);
            router.push(`/search?q=${encodedQuery}`);
        }
    };

    return(
        <Layout session={session} >
            <div className="mt-8">
            <SearchBar word={searchWord} typeHandler={handleChange} enterHandler={handleKeyDown}/>
            <div className="mb-20 columns is-multiline" style={{ marginLeft: 10, marginRight: 10}}>
            {isLoading && <LoadingAnimation/>}
            
            {!isLoading && ( data.groupbuys.length > 0 
            ?
                data.groupbuys.map((product, index) => (
                    <ProjectCard info={product} key={index}/>
                ))
            :
                <p className="is-size-3 ml-auto mr-auto mt-4">No Group Buys Found.</p>
            )} 


            </div>
            {/* <Pagination/> */}
            </div>
        </Layout>
    );
}