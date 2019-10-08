import { summaryModel } from '../models/SummaryModel';

export const rootReducers = {
  ...summaryModel.register(),
};
