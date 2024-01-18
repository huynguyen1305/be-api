import mongoose, { Schema } from 'mongoose';

export const PermissionSchema = new Schema({
  project_name: { type: String },
  link_to_research_result: { type: String },
  issue_coverage_rate: { type: Number },
  genre: { type: String },
  test_name: { type: String },
  game: { type: Schema.Types.ObjectId, ref: 'Game' },
  insights: [{ type: Schema.Types.ObjectId, ref: 'Insight' }],
  stage_of_development: { type: Array<string> },
  project_objective: { type: Array<string> },
  project_objective_detail: { type: String },
  methodology: { type: Array<string> },
  target_user_type: { type: Array<string> },
  target_number_of_people: { type: Number },
  start_date: { type: Date },
  end_date: { type: Date },
  stakeholders: { type: String },
  impact_type: { type: Array<string> },
  impact_scale: { type: Array<string> },
});
export const Project = mongoose.model('Permission', PermissionSchema);
