const {prisma}= require('./db.js')

const resolvers = {
  Query: {
    getPackage: async (parent, { id }) => {
      const package = await prisma.package.findUnique({ where: { id } });
      return package;
    },
    getPackages: async () => {
      const packages = await prisma.Package.findMany();
      return packages ;
    },
    filterByCost: async (parent, args ) => {
      
      const packages = await prisma.package.findMany({
        where: {
          cost: {
            gte: args.min,
            lte: args.max,
          },
        },
        orderBy: {
          cost: 'asc',
        },
      });
      return packages;
    },
    sortByName: async () => {
      const packages = await prisma.package.findMany({
        orderBy: {
          name: 'asc',
        },
      });
      return packages;
    },
    sortByCost: async () => {
      const packages = await prisma.package.findMany({
        orderBy: {
          cost: 'asc',
        },
      });
      return packages;
    },
    sortByLocation: async () => {
      const packages = await prisma.package.findMany({
        orderBy: {
          location: 'asc',
        },
      });
      return packages;
    },
    filterPremiumPackages: async () => {
      const packages = await prisma.package.findMany({
        where: {
          is_premium_flag: true,
        },
      });
      return packages;
    },
    filterByLocation: async (parent,  args ) => {
      const packages = await prisma.package.findMany({
        where: {
          location: {
            contains: args.location,
          },
        },
      });
      return packages; 
    }
  },
  Mutation: {
    createPackage: async (parent, { input }) => {
      const package = await prisma.package.create({ data: input });
      return package;
    },
    updatePackage: async (parent, { id, input }) => {
      const package = await prisma.package.findUnique({ where: { id } });
      if (!package) {
        throw new Error('Could not find package');
      }
      const updatedPackage = await prisma.package.update({
        where: { id },
        data: input,
      });
      return updatedPackage;
    },
    deletePackage: async (parent, { id }) => {
      return prisma.package.delete({ where: { id } })
    },
  },
}

module.exports = {resolvers}
