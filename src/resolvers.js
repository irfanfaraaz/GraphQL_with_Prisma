const {prisma}= require('./db.js')

const resolvers = {
  Query: {
    package: async (parent, { id }) => {
      const package = await prisma.package.findUnique({ where: { id } });
      return package;
    },
    packages: async () => {
      const packages = await prisma.Package.findMany();
      return packages ;
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
