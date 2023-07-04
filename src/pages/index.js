import React from 'react';
import Home from './home';

import Layout, { siteTitle } from '../components/layout';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import CarouselCard from '../components/carouselCard';
import prisma from '../lib/prisma';

TimeAgo.addDefaultLocale(en)

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
    
     <Home products={products}/>
    
  );
}

