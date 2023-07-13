import React from 'react';
import Layout from '../components/layout';
import prisma from '../lib/prisma';
import DashboardCarousel from '../components/dashboardCarousel';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en);


export async function getStaticProps() {
    const live = await prisma.project.findMany({
        where: {
            AND: {  published: { equals: true}},
        },
        include: {
            designer: {
            select: { name: true },
            },
        },
    });
    const checks = await prisma.project.findMany({
        where: {
            AND: {  published: { equals: true}},
        },
        include: {
          designer: {
            select: { name: true },
          },
        },
      });
    const drafts = await prisma.project.findMany({
        where: {
            published: { equals: true},
        },
        include: {
          designer: {
            select: { name: true },
          },
        },
      });
    const completed = await prisma.project.findMany({
        where: {
            AND: { published: { equals: true}},
        },
        include: {
          designer: {
            select: { name: true },
          },
        },
      });
  
    return {
        props: { 
            live: JSON.parse(JSON.stringify(live)),
            checks: JSON.parse(JSON.stringify(checks)),
            drafts: JSON.parse(JSON.stringify(drafts)),
            completed: JSON.parse(JSON.stringify(completed)),
        },
      revalidate: 30,
    };
  }




export default function DesignerDashboard({live, checks, drafts, completed}) {

  return (
    <Layout >
        <div className='has-text-grey is-size-3 ml-24'>{'Your Designer Name'}</div>
        <DashboardCarousel products={live} title={'Your Live Group Buys'}/>
        <DashboardCarousel products={checks} title={'Your Interest Checks'}/>
        <DashboardCarousel products={drafts} title={'Drafts'}/>
        <DashboardCarousel products={completed} title={'Completed Group Buys'}/>
    </Layout>
  );
}

