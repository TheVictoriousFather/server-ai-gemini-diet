import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutritionController } from "./controllers/NutritionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Vitor",\n  "sexo": "Masculino",\n  "idade": 20,\n  "altura": 1.70,\n  "peso": 74,\n  "objetivo": "Hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "2 ovos mexidos",\n        "1 banana",\n        "200ml de leite desnatado"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da Manhã",\n        "alimentos": [\n          "1 scoop de whey protein"\n        ]\n    },\n    {\n      "horario": "12:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "100g de arroz integral",\n        "100g de batata doce",\n        "Salada verde a vontade"\n      ]\n    },\n    {\n      "horario": "15:00",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 iogurte grego com granola"\n      ]\n    },\n    {\n      "horario": "18:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de carne vermelha magra",\n        "100g de batata doce",\n        "100g de brócolis"\n      ]\n    },\n    {\n      "horario": "20:00",\n      "nome": "Lanche da Noite",\n      "alimentos": [\n        "1 scoop de caseína"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey Protein",\n    "Creatina",\n    "BCAA",\n    "Glutamina",\n    "Multivitamínico"\n  ]\n}\n```';
    try {
        let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()
        let jsonObject = JSON.parse(jsonString)
        return reply.send({ data:jsonObject });
    } catch (err) {
        console.log(err)
    }
      reply.send({ ok: true });
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    }
  );
}
