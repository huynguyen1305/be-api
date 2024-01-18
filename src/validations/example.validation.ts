// import { z } from 'zod';

// export const CreateGameSchema = z.object({
//   body: z.object({
//     game_name: z.string(),
//     genre: z.string(),
//     platform: z.string(),
//     release_date: z.string(),
//     status_live: z.string(),
//   }),
// });

// export const UpdateGameSchema = z.object({
//   params: z.object({
//     id: z.string(),
//   }),
//   body: z.object({
//     game_name: z.string().optional(),
//     genre: z.string().optional(),
//     platform: z.string().optional(),
//     release_date: z.string().optional(),
//     status_live: z.string().optional(),
//   }),
// });

// export const GetGameSchema = z.object({
//   params: z.object({
//     id: z.string(),
//   }),
// });

// export const DeleteGameSchema = z.object({
//   params: z.object({
//     id: z.string(),
//   }),
// });

// import { z } from 'zod';
// import { EUserImpactApplicability } from '../enum/insight.enum';

// export const CreateInsightSchema = z.object({
//   body: z.object({
//     game_name: z.string(),
//     genre: z.string().optional(),
//     project_id: z.string(),
//     insights: z.string(),
//     insights_status: z.string(),
//     insights_type: z.string(),
//     insights_detail: z.string(),
//     feature_type: z.string(),
//     feature_name: z.string(),
//     user_group_type: z.array(z.string()).or(z.string()).optional(),
//     user_group_name: z.string().optional(),
//     improve_suggestions: z.string().optional(),
//     user_impact: z.nativeEnum(EUserImpactApplicability),
//     applicability: z.nativeEnum(EUserImpactApplicability),
//     application_status: z.string(),
//     stakeholder_opinion: z.string().optional(),
//     main_insight_image: z.string(),
//     insights_image: z.array(z.string()),
//     improve_image: z.array(z.string()),
//     stakeholder_opinion_image: z.array(z.string()),
//   }),
// });

// export const UpdateInsightSchema = z.object({
//   params: z.object({ id: z.string() }),
//   body: z.object({
//     game_name: z.string().optional(),
//     genre: z.string().optional(),
//     project_id: z.string().optional(),
//     insights: z.string().optional(),
//     insights_status: z.string().optional(),
//     insights_type: z.string().optional(),
//     insights_detail: z.string().optional(),
//     feature_type: z.string().optional(),
//     feature_name: z.string().optional(),
//     user_group_type: z.array(z.string()).or(z.string()).optional(),
//     user_group_name: z.string().optional(),
//     improve_suggestions: z.string().optional(),
//     user_impact: z.nativeEnum(EUserImpactApplicability).optional(),
//     applicability: z.nativeEnum(EUserImpactApplicability).optional(),
//     application_status: z.string().optional(),
//     stakeholder_opinion: z.string().optional(),
//     main_insight_image: z.string().optional(),
//     insights_image: z.array(z.string()).optional(),
//     improve_image: z.array(z.string()).optional(),
//     stakeholder_opinion_image: z.array(z.string()).optional(),
//   }),
// });

// export const GetInsightSchema = z.object({
//   params: z.object({
//     id: z.string(),
//   }),
// });

// export const DeleteInsightSchema = z.object({
//   params: z.object({
//     id: z.string(),
//   }),
// });

// import { z } from 'zod';

// export const CreateProjectSchema = z.object({
//   body: z.object({
//     project_name: z.string(),
//     link_to_research_result: z.string(),
//     issue_coverage_rate: z.number().optional(),
//     genre: z.string(),
//     test_name: z.string(),
//     stage_of_development: z.array(z.string()),
//     project_objective: z.array(z.string()),
//     project_objective_detail: z.string(),
//     methodology: z.array(z.string()),
//     target_user_type: z.array(z.string()),
//     target_number_of_people: z.number(),
//     start_date: z.string(),
//     end_date: z.string(),
//     stakeholders: z.string(),
//     impact_type: z.array(z.string()),
//     impact_scale: z.array(z.string()),
//     game_id: z.string(),
//   }),
// });

// export const UpdateProjectSchema = z.object({
//   params: z.object({
//     id: z.string(),
//   }),
//   body: z.object({
//     project_name: z.string().optional(),
//     link_to_research_result: z.string().optional(),
//     issue_coverage_rate: z.number().optional(),
//     genre: z.string().optional(),
//     test_name: z.string().optional(),
//     stage_of_development: z.array(z.string()).optional(),
//     project_objective: z.array(z.string()).optional(),
//     project_objective_detail: z.string().optional(),
//     methodology: z.array(z.string()).optional(),
//     target_user_type: z.array(z.string()).optional(),
//     target_number_of_people: z.number().optional(),
//     start_date: z.string().optional(),
//     end_date: z.string().optional(),
//     stakeholders: z.string().optional(),
//     impact_type: z.array(z.string()).optional(),
//     impact_scale: z.array(z.string()).optional(),
//   }),
// });
// export const GetProjectSchema = z.object({
//   params: z.object({
//     id: z.string(),
//   }),
// });

// export const GetProjectsSchema = z.object({
//   query: z.object({
//     game_id: z.string().optional(),
//   }),
// });

// export const DeleteProjectSchema = z.object({
//   params: z.object({
//     id: z.string(),
//   }),
// });
