const {PackageList} = require("../data");
const _ = require("lodash");

const resolvers = {
  Query: {
    packages: () => {
      return PackageList;
    },
    package: (parent, args) => {
        const id=args.id;
        const package=PackageList.find((package)=>package.id===id);  
        return package;
    }
  },
//   Package: {
//     priceRange:()=>{
//         return _filter(PackageList, (package)=> package.Cost>=1000 && package.Cost<=2000)
//     }
//   },
  Mutation: {
    createPackage: (parent, args) => {
        const package = args.input;
        // const lastId= PackageList[PackageList.length-1].id;
        // package.id=lastId+1;
        PackageList.push(package);
        return package;
    },
    updatePackage: (parent, args) => {
        // const id = args.input.id;
        // const package = args.input;
        // PackageList.forEach((package)=>{
        //     if(package.id===id)
        //         Object.assign(package, args.input);
        // })
        
        // PackageList.push(package);
        // return package;
        const id = args.input.id;
        const package = args.input;
        const index = PackageList.findIndex((package)=>package.id===id);
        if(index!==-1){
            PackageList[index]=package;
        }
        return package;
        
    },
    deletePackage: (parent, args) => {
        const id = args.id;
        _.remove(PackageList, (package)=>package.id===id);
        return null;
    },
  }
};

module.exports = { resolvers };
