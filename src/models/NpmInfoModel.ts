import { Model } from '@redux-model/web';
import { $api } from '../libraries/httpService/$api';

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
      .cache(1000)
      .onSuccess((_, action) => {
        return action.response;
      });
  });

  async combo(packageName: string) {
    const info = await $api.getAsync<Response>({
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
