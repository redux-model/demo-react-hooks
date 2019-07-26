import { Model } from '@redux-model/web';

type Data = {
  amount: number;
};

class CounterModel extends Model<Data> {
  increase = this.actionNormal({
    action: () => {
      return this.emit();
    },
    onSuccess: (state) => {
      state.amount += 1;
    },
  });

  reset = this.actionNormal({
    action: () => {
      return this.emit();
    },
    onSuccess: (state) => {
      state.amount = 0;
    },
  });

  resetThunk = this.actionThunk(() => {
    return (dispatch) => {
      if (this.connectData().amount !== 0) {
        return dispatch(this.reset.action());
      }

      return;
    };
  });

  protected initReducer(): Data {
    return {
      amount: 0,
    };
  }
}

export const counterModel = new CounterModel();
