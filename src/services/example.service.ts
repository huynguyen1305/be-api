// import { HttpStatusCode } from '../constants';
// import { CreateGameDto } from '../dtos/game/createGameDto';
// import { DeleteGameDto } from '../dtos/game/deleteGameDto';
// import { GetGameDto } from '../dtos/game/getGameDto';
// import { UpdateGameDto } from '../dtos/game/updateGameDto';
// import { Game } from '../models/game.model';
// import { APIError } from '../utils/BaseError';

// export const getGamesService = async () => {
//   const game = await Game.find().populate('projects');
//   return game;
// };

// export const getGameService = async (data: GetGameDto) => {
//   const game = await Game.findById(data.id).populate('projects');
//   return game;
// };

// export const createGameService = async (data: CreateGameDto) => {
//   const { genre, platform, game_name, status_live, release_date } = data;

//   const game = await Game.create({ genre, platform, game_name, status_live, release_date });

//   return game;
// };

// export const updateGameService = async (data: UpdateGameDto) => {
//   const { genre, platform, game_name, status_live, release_date, id } = data;

//   const game = await Game.findByIdAndUpdate(id, { genre, platform, game_name, status_live, release_date });
//   if (!game) throw new APIError('Bad request', HttpStatusCode.BAD_REQUEST, 'Game not found');
//   return game;
// };

// export const deleteGameService = async (data: DeleteGameDto) => {
//   await Game.findByIdAndDelete(data.id);
//   return data.id;
// };

// import { HttpStatusCode } from '../constants';
// import { priorityConstant } from '../constants/priority';
// import { Insight } from '../models/insight.model';
// import { Project } from '../models/project.model';
// import { APIError } from '../utils/BaseError';
// import { removeOldImage } from '../utils/image';

// export const createInsightService = async (data: CreateInsightDto) => {
//   const { project_id, ...payload } = data;

//   const project = await Project.findById(project_id);

//   const priority = payload.user_impact && payload.applicability ? priorityConstant[payload.user_impact][payload.applicability] : undefined;

//   if (!project) throw new APIError('Bad Request', HttpStatusCode.BAD_REQUEST, 'Project not found');

//   const newInsight = await Insight.create({
//     ...payload,
//     priority,
//     project,
//   });

//   project.insights.push(newInsight.id);
//   project.save();

//   return newInsight;
// };

// export const getInsightsService = async () => {
//   const newInsight = await Insight.find().populate('project');
//   return newInsight;
// };

// export const getInsightService = async (data: GetInsightDto) => {
//   const newInsight = await Insight.findById(data.id).populate('project');
//   return newInsight;
// };

// export const deleteInsightService = async (data: DeleteInsightDto) => {
//   const insight = await Insight.findById(data.id);
//   if (!insight) throw new APIError('Bad Request', HttpStatusCode.BAD_REQUEST, 'Insight not found');

//   // remove old file
//   if (insight.improve_image) removeOldImage(insight.improve_image);
//   if (insight.stakeholder_opinion_image) removeOldImage(insight.stakeholder_opinion_image);
//   if (insight.insights_image) removeOldImage(insight.insights_image);

//   await Insight.findByIdAndDelete(data.id);
//   return data.id;
// };

// export const updateInsightService = async (data: UpdateInsightDto) => {
//   const { project_id, id, ...payload } = data;

//   const insight = await Insight.findById(id);
//   if (!insight) throw new APIError('Bad Request', HttpStatusCode.BAD_REQUEST, 'Insight not found');

//   const user_impact = payload.user_impact ?? insight.user_impact;
//   const applicability = payload.applicability ?? insight.applicability;

//   // remove old file
//   // if (insight.improve_image && improve_image) removeOldImage(insight.improve_image);
//   // if (insight.stakeholder_opinion_image && stakeholder_opinion_image) removeOldImage(insight.stakeholder_opinion_image);
//   // if (insight.insights_image && insights_image) removeOldImage(insight.insights_image);
//   // if (insight.main_insight_image && main_insight_image) removeOldImage([insight.main_insight_image]);

//   let project;
//   if (project_id) {
//     project = await Project.findById(project_id);
//     if (!project) throw new APIError('Bad Request', HttpStatusCode.BAD_REQUEST, 'Project not found');
//   }

//   const priority = priorityConstant[user_impact][applicability];

//   const insightUpdated = await Insight.findByIdAndUpdate(
//     id,
//     {
//       ...payload,
//       priority,
//       project,
//     },
//     {
//       returnOriginal: false,
//     },
//   );

//   return insightUpdated?.populate('project');
// };

// import { HttpStatusCode } from '../constants';
// import { CreateProjectDto } from '../dtos/project/createProjectDto';
// import { DeleteProjectDto } from '../dtos/project/deleteProjectDto';
// import { GetProjectDto } from '../dtos/project/getProjectDto';
// import { GetProjectsDto } from '../dtos/project/getProjectsDto';
// import { UpdateProjectDto } from '../dtos/project/updateProjectDto';
// import { Game } from '../models/game.model';
// import { Insight } from '../models/insight.model';
// import { Project } from '../models/project.model';
// import { APIError } from '../utils/BaseError';

// export const createProjectService = async (data: CreateProjectDto) => {
//   const { game_id, ...payload } = data;
//   const dupProject = await Project.findOne({
//     test_name: payload.test_name,
//   });
//   if (dupProject) throw new APIError('Bad request', HttpStatusCode.BAD_REQUEST, 'Project existed');

//   const game = await Game.findById(game_id);
//   if (!game) throw new APIError('Bad request', HttpStatusCode.BAD_REQUEST, 'Game not found');

//   const newProject = await Project.create({
//     ...payload,
//     game,
//   });

//   game.projects.push(newProject.id);
//   game.save();
//   return newProject.populate('game');
// };

// export const updateProjectService = async (data: UpdateProjectDto) => {
//   const { id, game_id, ...payload } = data;
//   let game: unknown;
//   if (game_id) {
//     game = await Game.findById(game_id);
//     if (!game) throw new APIError('Bad request', HttpStatusCode.BAD_REQUEST, 'Game not found');
//   }
//   if (payload.test_name) {
//     const dupProject = await Project.findOne({
//       $and: [{ test_name: payload.test_name, _id: { $ne: id } }],
//     });
//     if (dupProject) throw new APIError('Bad request', HttpStatusCode.BAD_REQUEST, 'Project existed');
//   }

//   const newProject = await Project.findByIdAndUpdate(
//     id,
//     {
//       ...payload,
//       game: game ? game : undefined,
//     },
//     {
//       returnOriginal: false,
//     },
//   );
//   if (!newProject) throw new APIError('Bad request', HttpStatusCode.BAD_REQUEST, 'Project not found');
//   return newProject.populate('game');
// };

// export const getProjectsService = async (data: GetProjectsDto) => {
//   const { game_id: game_id } = data;

//   const findOptions: any = {};
//   if (game_id) {
//     findOptions.game = {};
//     findOptions.game._id = game_id;
//   }

//   const newProject = await Project.find(findOptions).populate('insights').populate('game').exec();
//   return newProject;
// };

// export const getProjectService = async (data: GetProjectDto) => {
//   const newProject = await Project.findById(data.id).populate('insights').populate('game');
//   return newProject;
// };

// export const deleteProjectService = async (data: DeleteProjectDto) => {
//   const project = await Project.findByIdAndDelete(data.id);

//   await Insight.deleteMany({
//     _id: {
//       $in: project?.insights,
//     },
//   });

//   return data.id;
// };
