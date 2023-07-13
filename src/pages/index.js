import React from 'react';
import Layout from '../components/layout';
import CarouselCard from '../components/carouselCard';
import prisma from '../lib/prisma';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en);

export async function getStaticProps() {
    const products = await prisma.project.findMany({
      include: {
        designer: {
          select: { name: true },
        },
      },
    });
  
    return {
      props: { products: JSON.parse(JSON.stringify(products)) },
      revalidate: 30,
    };
  }



export default function Index({products}) {

  return (
    <Layout >
      <CarouselCard products={products} labels={{'title':'Top Group Buys', 'subtitle':'Don\'t miss out! Join the latest popular group buys.'}}/>
      <CarouselCard products={products} labels={{'title':'Trending Designers', 'subtitle':'Discover new keyboards from upcoming designers.'}}/>
    </Layout>
  );
}

