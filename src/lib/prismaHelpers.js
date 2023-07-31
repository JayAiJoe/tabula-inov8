import { faScaleUnbalancedFlip } from "@fortawesome/free-solid-svg-icons";
import prisma from "./prisma";



export async function getAllProjectIds() {
    const groupbuys = await prisma.GroupBuy.findMany();
    return groupbuys.map((project) => {
      return {
        params: {
          id: project.id,
        },
      };
    });
  }

export async function searchGroupBuys(searchWord) {
  const result = await prisma.GroupBuy.findMany({
    include: {
      designer: {
        select: { username: true },
      },
   },
    where: {
      OR: [
        {name : {contains : searchWord, mode: 'insensitive'}},
        {designer : {username: {contains : searchWord, mode: 'insensitive'}}}
      ]
    }
  });
  return result;
}

export async function searchDesigners(searchWord) {
  const result = await prisma.User.findMany({
    include:{
      groupBuys: true,
      followers: true,
    },
    where: {
      AND: [
        {username : {contains : searchWord, mode: 'insensitive'}},
        {designer : true}
      ]
    }
  });
  return result;
}

export async function getGroupBuysByDesigner(dId){
  const result = await prisma.GroupBuy.findMany({
    include: {
      designer: {
        select: { username: true },
      },
   },
    where: {
        designerId : dId
    }
  });
  return result;
}

export async function getUserNames(){
  const users = await prisma.User.findMany();
    return users.map((user) => {
      return {
        params: {
          username: user.username,
        },
      };
    });
}

export async function findUser(em, pass){
  const user = await prisma.User.findFirst({
    where: {
      email: em,
      password: pass,
    },
  })
  return user;
}

export async function getDesignerData(id){
  const user = await prisma.User.findUnique({
    where: {
      id: id
    },
  })
  return user;
}

export async function getAllDesignerStats(){
  const allDesigners = await prisma.User.findMany({
    include:{
      groupBuys: true,
      followers: true,
    },
    where:{
        designer : true,
    }
  });
  return allDesigners;
}

export async function getProjectData(pid) {
  const project = await prisma.GroupBuy.findUnique({
      where:  {
          id: pid,
      },
      include: {
          designer: { select: { username : true}},
          components : {include : { options : true }},
          comments : {
            orderBy : {submitDate : 'desc'},
            include : {user : {select : {username : true}}}
          },
          updates : {
            orderBy : {submitDate : 'desc'},
          }
      },
  });

  let cmt = [];
  project.comments.map((comment) =>(
    cmt.push({
      user: {username: comment.user.username}, 
      body : comment.body, 
      date : comment.submitDate.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})
    })
  ));


  let upd = [];
  project.updates.map((update) => (
    upd.push({
      user:{username:project.designer.username}, 
      body : update.body, 
      date : update.submitDate.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})
    })
  ));

  return {
    name : project.name,
    designer : project.designer.username,
    description : project.description,
    price : project.price,
    status : project.status,
    components : project.components,
    maxUnits : project.maxUnits,
    currentUnits : project.currentUnits,
    comments : cmt,
    updates : upd,
  };
}