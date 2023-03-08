const { gql } = require('apollo-server')
const {prisma} = require('./db.js')

const typeDefs = gql`
  type Package {
    id: ID!
    name: String!
    contact: String
    description: String
    location: String!
    cost: Float!
    duration: String
    image: String!
    activities: [String!]!
    details_file: String
    updated_at: String
    video_link: String
    is_premium_flag: Boolean
    # priceRange: [Package]
  }
  input Range{
    min: Float
    max: Float
  }

  type Query {
    packages: [Package!]!
    package(id: ID!): Package!
    filterPackages(input: Range): [Package!]!
    sortByName: [Package!]!
    sortByCost: [Package!]!
    sortByLocation: [Package!]!
  }
  
  input createPackageInput {
    id: ID!
    name: String!
    contact: String
    description: String
    location: String!
    cost: Float!
    duration: String
    image: String!
    activities: [String!]!
    details_file: String
    updated_at: String
    video_link: String
    is_premium_flag: Boolean
  }
  input updatePackageInput {
    id: ID!
    name: String!
    contact: String
    description: String
    location: String
    cost: Float
    duration: String
    image: String
    activities: [String]
    details_file: String
    updated_at: String
    video_link: String
    is_premium_flag: Boolean
  }
  

  type Mutation {
    createPackage(input: createPackageInput): Package
    updatePackage(id: ID!, input: updatePackageInput): Package
    deletePackage(id: ID!): Package
  }

`;
module.exports = { typeDefs};
