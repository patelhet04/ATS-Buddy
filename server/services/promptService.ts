import { PromptRequestBody } from "../constants";
import axios from "axios";

const AZURE_OPENAI_ENDPOINT = "https://atsbuddy-instance-1.openai.azure.com";
const AZURE_OPENAI_KEY = "";
const DEPLOYMENT_NAME = "atsbuddy-gpt-4";

export const generateResumePoints = async (
  input: PromptRequestBody
): Promise<string[]> => {
  try {
    const {
      user_role,
      years_of_experience,
      past_experience,
      skills,
      domain,
      word_limit,
      include_metrics,
    } = input;
    const prompt = `You are a resume-writing expert with knowledge of Applicant Tracking Systems (ATS) and best practices in crafting strong, action-oriented bullet points. Based on the following user-provided information, generate concise, ATS-optimized resume bullet points. Each bullet point should:

•⁠  ⁠Use strong action verbs such as "Led," "Improved," "Developed," etc., and be written in a professional tone using active voice.
•⁠  ⁠Include quantifiable metrics or measurable impact wherever possible if metrics are enabled ("Include Metrics: Yes").
•⁠  ⁠Avoid including metrics if metrics are disabled ("Include Metrics: No").
•⁠  ⁠Incorporate relevant industry and technical keywords to enhance ATS compatibility.
•⁠  ⁠Be tailored to the user's role, years of experience, past experience, technical skills, and industry domain.
•⁠  ⁠Highlight problem-solving skills and unique contributions.
•⁠  ⁠Use consistent verb tenses appropriate to past or current roles.
•⁠  ⁠Start each bullet point with a capital letter and avoid ending with a period.
•⁠  ⁠Avoid clichés, overused phrases, and personal pronouns.
•⁠  ⁠Do not include any confidential or proprietary information from past employers.
•⁠  ⁠Stay within the provided word limit for each point.

Here is the user's input:
•⁠  ⁠Role: ${user_role}
•⁠  ⁠Years of Experience: ${years_of_experience}
•⁠  ⁠Past Experience: ${past_experience}
•⁠  ⁠Programming Languages/Frameworks/Libraries: ${skills.join(", ")}
•⁠  ⁠Domain: ${domain}
•⁠  ⁠Approximate Word Limit: ${word_limit} words per point
•  Include Metrics: ${include_metrics} (Yes/No)

Generate 3-5 bullet points that highlight the user's technical skills, achievements, and impact using the provided input. Make sure the points reflect their seniority based on years of experience and past achievements, aligning them with the industry domain.

Example Output Format:
•⁠  ⁠Led a team of {{number}} developers over {{years of experience}}, using {{language/framework/library}} to {{task/accomplishment}}, resulting in {{outcome/metric}} in the {{industry/domain}}.
•⁠  ⁠Improved {{process/task}} by {{percentage/metric}} using {{technology}}, leveraging experience in {{past experience}}, leading to {{outcome}}.
•⁠  ⁠Developed {{feature/project}} with {{technology}} in the context of {{past experience}}, achieving {{metric/impact}}.
•⁠  ⁠Automated {{process/task}} using {{tools/technologies}}, increasing efficiency by {{percentage}} and contributing to {{business outcome}}.
•⁠  ⁠Collaborated with cross-functional teams to implement {{project/initiative}}, enhancing {{area}} and driving {{result}}.`;

    const response = await axios.post(
      `${AZURE_OPENAI_ENDPOINT}/openai/deployments/${DEPLOYMENT_NAME}/chat/completions?api-version=2024-08-01-preview`,
      {
        prompt,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": `${AZURE_OPENAI_KEY}`,
        },
      }
    );
    // Extract and return the generated content
    const generatedText = response.data.choices[0].text.trim();
    const bulletPoints = generatedText
      .split("\n")
      .filter((line) => line.startsWith("•"));
    return bulletPoints;
  } catch (error) {
    console.error(
      "Error generating resume points:",
      error.response?.data || error.message
    );
    throw new Error("Failed to generate resume points");
  }
};
