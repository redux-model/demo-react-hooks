import { Model } from '@redux-model/web';

type Data = {
  amount: number;
};

class CounterModel extends Model<Data> {
  increase = this.action((state) => {
    state.amount += 1;
  });

  reset = this.action((state) => {
    state.amount = 0;
  });

  public comboReset() {
    if (this.data.amount !== 0) {
      this.reset();
    }
  }

  protected initReducer(): Data {
    return {
      amount: 0,
    };
  }
}

export const counterModel = new CounterModel();
