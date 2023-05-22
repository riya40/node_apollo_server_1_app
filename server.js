const {ApolloServer, gql} = require("apollo-server");

const employees = [
    {id:"1",name:"john Deo", department:"HR"},
    {
        id:"2",name:"jane",department:"engineering"},
];

const typeDefs = gql`
 type Employee{
    id:ID
    name:String
    department:String
 }
 
 type Query{
    employee(id:ID!):Employee
    employees:[Employee]
 }
 `;

 const resolvers = {
    Query:{
    employee:(parent,{id}) =>
    employees.find((employee)=> employee.id == id),
    employees:()=>employees,
 },
};

const server = new ApolloServer({ typeDefs,resolvers});

server.listen().then(({url}) =>{
    console.log(`server ready at ${url}`);
});