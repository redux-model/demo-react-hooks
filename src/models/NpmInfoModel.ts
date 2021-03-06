import { Model } from '@redux-model/react';
import { $api } from '../libraries/httpService/$api';
import { counterModel } from './CounterModel';

interface Response {
  _id: string;
  license: string;
  homepage: string;
}

type Data = Partial<Response>;

class NpmInfoModel extends Model<Data> {
  manage = $api.action((packageName: string) => {
    return this
      .get<Response>('/' + packageName)
      .throttle({
        duration: 1000,
      })
      .onSuccess((_, action) => {
        return action.response;
      })
      .afterSuccess(() => {
        counterModel.increase();
      });
  });

  combo = this.compose(async (packageName: string) => {
    const info = await $api.getAsync<Response>({
      uri: '/' + packageName,
      query: {
        noCache: Date.now(),
      },
    });

    this.changeState((state) => {
      state.homepage = info.response.homepage;
    });
  });

  reset = this.action(() => {
    return {};
  });

  protected initialState(): Data {
    return {};
  }
}

export const npmInfoModel = new NpmInfoModel();
