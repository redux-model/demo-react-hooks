import { Model, Subscriptions } from '@redux-model/react';
import { counterModel } from './CounterModel';
import { npmInfoModel } from './NpmInfoModel';

interface Data {
  times: number;
  lastTime?: string;
}

class SummaryModel extends Model<Data> {
  protected initialState(): Data {
    return {
      times: 0,
    };
  }

  protected subscriptions(): Subscriptions<Data> {
    return [

      counterModel.increase.onSuccess((state) => {
        return {
          times: state.times + 1,
          lastTime: (new Date()).toUTCString(),
        };
      }),

      counterModel.reset.onSuccess((state) => {
        return {
          times: state.times + 1,
          lastTime: (new Date()).toUTCString(),
        };
      }),

      npmInfoModel.reset.onSuccess((state) => {
        return {
          times: state.times + 1,
          lastTime: (new Date()).toUTCString(),
        };
      }),

      npmInfoModel.manage.onSuccess((state) => {
        return {
          times: state.times + 1,
          lastTime: (new Date()).toUTCString(),
        };
      }),

    ];
  }
}

export const summaryModel = new SummaryModel();
