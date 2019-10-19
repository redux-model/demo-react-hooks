import { Model } from '@redux-model/web';

type Data = {
  amount: number;
};

class CounterModel extends Model<Data> {
  increase = this.action((state) => {
    state.amount += 1;
  });

  reset = this.action((state) => {
    if (this.data.amount !== 0) {
      state.amount = 0;
    }
  });

  protected initReducer(): Data {
    return {
      amount: 0,
    };
  }
}

export const counterModel = new CounterModel();
