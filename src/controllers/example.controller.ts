// import { NextFunction, Request, Response } from 'express';
// import { HttpStatusCode, SUCCESS } from '../constants';
// import { createGameService, deleteGameService, getGameService, getGamesService, updateGameService } from '../services/game.service';
// import createResponse from '../utils/createResponse';

// export const getGamesController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await getGamesService();
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const getGameController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await getGameService({ id: req.params.id });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const createGameController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await createGameService({
//       release_date: req.body.release_date,
//       status_live: req.body.status_live,
//       game_name: req.body.game_name,
//       platform: req.body.platform,
//       genre: req.body.genre,
//     });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const updateGameController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await updateGameService({
//       genre: req.body.genre,
//       platform: req.body.platform,
//       game_name: req.body.game_name,
//       status_live: req.body.status_live,
//       release_date: req.body.release_date,
//       id: req.params.id,
//     });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };
// export const deleteGameController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await deleteGameService({ id: req.params.id });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// import { NextFunction, Request, Response } from 'express';
// import { HttpStatusCode, SUCCESS } from '../constants';
// import { createInsightService, deleteInsightService, getInsightService, getInsightsService, updateInsightService } from '../services/insight.service';
// import createResponse from '../utils/createResponse';

// export const getInsightsController = async (_req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await getInsightsService();
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const getInsightController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await getInsightService({ id: req.params.id });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const deleteInsightController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await deleteInsightService({ id: req.params.id });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const createInsightController = async (req: any, res: Response, next: NextFunction) => {
//   try {
//     const data = await createInsightService({
//       game_name: req.body.game_name,
//       genre: req.body.genre,
//       main_insight_image: req.body.main_insight_image,
//       project_id: req.body.project_id,
//       insights: req.body.insights,
//       insights_status: req.body.insights_status,
//       insights_type: req.body.insights_type,
//       insights_detail: req.body.insights_detail,
//       insights_image: req.body.insights_image,
//       feature_type: req.body.feature_type,
//       feature_name: req.body.feature_name,
//       user_group_type: req.body.user_group_type,
//       user_group_name: req.body.user_group_name,
//       improve_suggestions: req.body.improve_suggestions,
//       improve_image: req.body.improve_image,
//       user_impact: req.body.user_impact,
//       applicability: req.body.applicability,
//       application_status: req.body.application_status,
//       stakeholder_opinion: req.body.stakeholder_opinion,
//       stakeholder_opinion_image: req.body.stakeholder_opinion_image,
//     });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const updateInsightController = async (req: any, res: Response, next: NextFunction) => {
//   try {
//     const data = await updateInsightService({
//       id: req.params.id,
//       game_name: req.body.game_name,
//       genre: req.body.genre,
//       main_insight_image: req.body.main_insight_image,
//       project_id: req.body.project_id,
//       insights: req.body.insights,
//       insights_status: req.body.insights_status,
//       insights_type: req.body.insights_type,
//       insights_detail: req.body.insights_detail,
//       insights_image: req.body.insights_image,
//       feature_type: req.body.feature_type,
//       feature_name: req.body.feature_name,
//       user_group_type: req.body.user_group_type,
//       user_group_name: req.body.user_group_name,
//       improve_suggestions: req.body.improve_suggestions,
//       improve_image: req.body.improve_image,
//       user_impact: req.body.user_impact,
//       applicability: req.body.applicability,
//       application_status: req.body.application_status,
//       stakeholder_opinion: req.body.stakeholder_opinion,
//       stakeholder_opinion_image: req.body.stakeholder_opinion_image,
//     });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// import { NextFunction, Request, Response } from 'express';
// import { HttpStatusCode, SUCCESS } from '../constants';
// import { createProjectService, deleteProjectService, getProjectService, getProjectsService, updateProjectService } from '../services/project.service';
// import createResponse from '../utils/createResponse';
// import { GetProjectsDto } from '../dtos/project/getProjectsDto';

// export const getProjectsController = async (req: Request<unknown, unknown, unknown, GetProjectsDto>, res: Response, next: NextFunction) => {
//   try {
//     const data = await getProjectsService({
//       game_id: req.query.game_id,
//     });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const getProjectController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await getProjectService({ id: req.params.id });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const deleteProjectController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await deleteProjectService({ id: req.params.id });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };
// export const createProjectController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await createProjectService({
//       game_id: req.body.game_id,
//       project_name: req.body.project_name,
//       link_to_research_result: req.body.link_to_research_result,
//       issue_coverage_rate: req.body.issue_coverage_rate,
//       genre: req.body.genre,
//       test_name: req.body.test_name,
//       stage_of_development: req.body.stage_of_development,
//       project_objective: req.body.project_objective,
//       project_objective_detail: req.body.project_objective_detail,
//       methodology: req.body.methodology,
//       target_user_type: req.body.target_user_type,
//       target_number_of_people: req.body.target_number_of_people,
//       start_date: req.body.start_date,
//       end_date: req.body.end_date,
//       stakeholders: req.body.stakeholders,
//       impact_type: req.body.impact_type,
//       impact_scale: req.body.impact_scale,
//     });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };

// export const updateProjectController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await updateProjectService({
//       game_id: req.body.game_id,
//       id: req.params.id,
//       project_name: req.body.project_name,
//       link_to_research_result: req.body.link_to_research_result,
//       issue_coverage_rate: req.body.issue_coverage_rate,
//       genre: req.body.genre,
//       test_name: req.body.test_name,
//       stage_of_development: req.body.stage_of_development,
//       project_objective: req.body.project_objective,
//       project_objective_detail: req.body.project_objective_detail,
//       methodology: req.body.methodology,
//       target_user_type: req.body.target_user_type,
//       target_number_of_people: req.body.target_number_of_people,
//       start_date: req.body.start_date,
//       end_date: req.body.end_date,
//       stakeholders: req.body.stakeholders,
//       impact_type: req.body.impact_type,
//       impact_scale: req.body.impact_scale,
//     });
//     return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
//   } catch (err) {
//     next(err);
//   }
// };
