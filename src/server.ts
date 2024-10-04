import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from 'dotenv';
import{ routes }from './route'
const app = fastify({logger:true})
const port = 3333
dotenv.config();

app.setErrorHandler((error, request, reply)=> {
 reply.code(400).send({message:error.message})   
})

const start = async ()=>{
app.register(cors);
app.register(routes)
try{
await app.listen({port: port, host:"0.0.0.0"})
console.log('servidor rodando em localhost/',port)
}catch(err){
console.log(err)
}
}
start();