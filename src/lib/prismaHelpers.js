import prisma from "./prisma";



export async function getAllProjectIds() {
    const projects = await prisma.project.findMany();
    return projects.map((project) => {
      return {
        params: {
          id: project.id,
        },
      };
    });
  }

  export async function getProjectData(pid) {
    const project = await prisma.project.findUnique({
        where:  {
            id: pid,
        },
        include: {
            designer: {
              select: { name: true },
            },
        },
    });
  
    console.log(project);
    return {
      name : project.name,
      designer : project.designer.name,
      description : project.description,
      price : project.price,
      options : project.options,
      maxUnits : project.maxUnits,
      takenUnits : project.takenUnits      
    };
  }