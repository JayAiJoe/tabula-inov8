import Layout, { siteTitle } from '../components/layout';
import CarouselCard from '../components/carouselCard';


export default function Home({ products }) {
  return (
    <Layout >
      <CarouselCard products={products} labels={{'title':'Top Group Buys', 'subtitle':'Don\'t miss out! Join the latest popular group buys.'}}/>
      <CarouselCard products={products} labels={{'title':'Trending Designers', 'subtitle':'Discover new and upcoming keyboard designers.'}}/>
    </Layout>
  );
}