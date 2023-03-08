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
    filterPackages: async (parent, { input }) => {
      const packages = await prisma.package.findMany({
        where: {
          cost: {
            gte: input.min,
            lte: input.max,
          },
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
