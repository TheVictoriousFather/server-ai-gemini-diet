import {FastifyRequest, FastifyReply} from 'fastify'
import { CreateNutritionService } from '../services/NutritionService'

export interface DataProps{
    name:string;
    weight:string;
    height:string;
    age:string;
    gender:string;
    objective:string;
    level:string
}



class CreateNutritionController{
    async handle(request:FastifyRequest, reply:FastifyReply){
const { name, weight, height, age, gender, objective, level} = request.body as DataProps;

        console.log('rota foi chamada')
      

        const createNutrition = new CreateNutritionService()

        const Nutrition = await createNutrition.execute({ name, weight, height, age, gender, objective, level});  
        
        reply.send({Nutrition})
    }
}
export{CreateNutritionController}