// import express, { IRouter } from 'express';
// import {
//   createGameController,
//   deleteGameController,
//   getGameController,
//   getGamesController,
//   updateGameController,
// } from '../controllers/game.controller';
// import { validate } from '../middlewares/validate';
// import { CreateGameSchema, DeleteGameSchema, GetGameSchema, UpdateGameSchema } from '../validations/game.validation';

// const gameRoute: IRouter = express.Router();

// gameRoute.post('/', validate(CreateGameSchema), createGameController);
// gameRoute.get('/', getGamesController);
// gameRoute.get('/:id', validate(GetGameSchema), getGameController);
// gameRoute.patch('/:id', validate(UpdateGameSchema), updateGameController);
// gameRoute.delete('/:id', validate(DeleteGameSchema), deleteGameController);

// export default gameRoute;

// import express, { IRouter } from 'express';
// import {
//   createInsightController,
//   deleteInsightController,
//   getInsightController,
//   getInsightsController,
//   updateInsightController,
// } from '../controllers/insight.controller';
// import { validate } from '../middlewares/validate';
// import { CreateInsightSchema, DeleteInsightSchema, GetInsightSchema, UpdateInsightSchema } from '../validations/insight.validation';

// const insightRoute: IRouter = express.Router();

// insightRoute.post('/', validate(CreateInsightSchema), createInsightController);
// insightRoute.patch('/:id', validate(UpdateInsightSchema), updateInsightController);
// insightRoute.get('/', getInsightsController);
// insightRoute.get('/:id', validate(GetInsightSchema), getInsightController);
// insightRoute.delete('/:id', validate(DeleteInsightSchema), deleteInsightController);

// export default insightRoute;

// import express, { IRouter } from 'express';
// import {
//   createProjectController,
//   getProjectsController,
//   getProjectController,
//   updateProjectController,
//   deleteProjectController,
// } from '../controllers/project.controller';
// import { validate } from '../middlewares/validate';
// import { CreateProjectSchema, DeleteProjectSchema, GetProjectSchema, UpdateProjectSchema } from '../validations/project.validation';

// const projectRoute: IRouter = express.Router();

// projectRoute.post('/', validate(CreateProjectSchema), createProjectController);
// projectRoute.get('/', getProjectsController);
// projectRoute.get('/:id', validate(GetProjectSchema), getProjectController);
// projectRoute.patch('/:id', validate(UpdateProjectSchema), updateProjectController);
// projectRoute.delete('/:id', validate(DeleteProjectSchema), deleteProjectController);
// export default projectRoute;
