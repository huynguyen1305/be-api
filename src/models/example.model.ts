// import mongoose, { Schema } from 'mongoose';

// export const InsightSchema = new Schema(
//   {
//     game_name: {
//       type: String,
//     },
//     genre: { type: String },
//     project: { type: Schema.Types.ObjectId, ref: 'Project' },
//     insights: {
//       type: String,
//     },
//     insights_status: {
//       type: String,
//     },
//     insights_type: { type: String },
//     insights_detail: {
//       type: String,
//     },
//     insights_image: [
//       {
//         type: String,
//       },
//     ],
//     feature_type: { type: String },
//     feature_name: { type: String },
//     user_group_type: { type: Array<string> },
//     user_group_name: { type: String },
//     improve_suggestions: { type: String },
//     improve_image: [{ type: String }],
//     user_impact: { type: String },
//     applicability: { type: String },
//     priority: { type: String },
//     application_status: { type: String },
//     stakeholder_opinion: { type: String },
//     stakeholder_opinion_image: [{ type: String }],
//     main_insight_image: { type: String },
//   },
//   {
//     timestamps: true,
//   },
// );

// export const Insight = mongoose.model('Insight', InsightSchema);

// import mongoose, { Schema } from 'mongoose';

// export const GameSchema = new Schema(
//   {
//     game_name: {
//       type: String,
//     },
//     genre: { type: String },
//     platform: { type: String },
//     release_date: { type: Date },
//     status_live: { type: String },
//     projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
//   },
//   {
//     timestamps: true,
//   },
// );

// export const Game = mongoose.model('Game', GameSchema);

// import mongoose, { Schema } from 'mongoose';

// export const ProjectSchema = new Schema(
//   {
//     project_name: { type: String },
//     link_to_research_result: { type: String },
//     issue_coverage_rate: { type: Number },
//     genre: { type: String },
//     test_name: { type: String },
//     game: { type: Schema.Types.ObjectId, ref: 'Game' },
//     insights: [{ type: Schema.Types.ObjectId, ref: 'Insight' }],
//     stage_of_development: { type: Array<string> },
//     project_objective: { type: Array<string> },
//     project_objective_detail: { type: String },
//     methodology: { type: Array<string> },
//     target_user_type: { type: Array<string> },
//     target_number_of_people: { type: Number },
//     start_date: { type: Date },
//     end_date: { type: Date },
//     stakeholders: { type: String },
//     impact_type: { type: Array<string> },
//     impact_scale: { type: Array<string> },
//   },
//   {
//     timestamps: true,
//   },
// );
// export const Project = mongoose.model('Project', ProjectSchema);
