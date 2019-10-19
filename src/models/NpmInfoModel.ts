import { Model } from '@redux-model/web';
import { api } from '../libraries/httpService/Api';

interface Response {
  _id: string;
  license: string;
  homepage: string;
}

type Data = Partial<Response>;

class NpmInfoModel extends Model<Data> {
  manage = api.action((packageName: string) => {
    return this
      .get<Response>('/' + packageName)
      .query({
        noCache: Date.now()
      })
      .onSuccess((_, action) => {
        return action.response;
      });
  });

  async combo(packageName: string) {
    const info = await api.getAsync<Response>({
      uri: '/' + packageName,
      query: {
        noCache: Date.now(),
      },
    });

    this.changeReducer((state) => {
      state.homepage = info.response.homepage;
    });
  }

  reset = this.action(() => {
    return {};
  });

  protected initReducer(): Data {
    return {};
  }
}

export const npmInfoModel = new NpmInfoModel();
