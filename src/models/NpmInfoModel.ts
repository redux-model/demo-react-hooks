import { Model } from '@redux-model/web';

interface Response {
  _id: string;
  license: string;
  homepage: string;
}

type Data = Partial<Response>;

class NpmInfoModel extends Model<Data> {
  manage = this.actionRequest({
    action: (packageName: string) => {
      return this.get({
        uri: this.uri<Response>('/' + packageName),
        query: {
          noCache: Date.now(),
        },
      });
    },
    onSuccess: (_, action) => {
      return action.response;
    },
    onFail: () => {
      return {};
    },
    meta: true,
  });

  reset = this.actionNormal(() => {
    return {};
  });

  protected initReducer(): Data {
    return {};
  }
}

export const npmInfoModel = new NpmInfoModel();
