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
 

  type Query {
    getPackages: [Package!]!
    getPackage(id: ID!): Package!
    filterByCost(min:Float, max:Float): [Package!]!
    filterByLocation(location: String!): [Package!]!
    sortByName: [Package!]!
    sortByCost: [Package!]!
    sortByLocation: [Package!]!
    filterPremiumPackages: [Package!]!
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
