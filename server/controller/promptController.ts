import { FastifyReply, FastifyRequest } from "fastify";
import { PromptRequestBody } from "../constants";
import { generateResumePoints } from "../services/promptService";

export const generate = async (
  req: FastifyRequest<{ Body: PromptRequestBody }>,
  reply: FastifyReply
) => {
  try {
    const {
      user_role,
      years_of_experience,
      past_experience,
      skills,
      domain,
      word_limit,
      include_metrics,
    } = req.body;

    const bulletPoints: string[] = await generateResumePoints({
      user_role,
      years_of_experience,
      past_experience,
      skills,
      domain,
      word_limit,
      include_metrics,
    });

    return reply.send({ bulletPoints });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({ error: "Failed to generate response." });
  }
};
