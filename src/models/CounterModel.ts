import { Model } from '@redux-model/web';

type Data = {
  amount: number;
};

class CounterModel extends Model<Data> {
  increase = this.actionNormal((state) => {
    state.amount += 1;
  });

  reset = this.actionNormal((state) => {
    state.amount = 0;
  });

  public resetThunk() {
    if (this.connectData().amount !== 0) {
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
