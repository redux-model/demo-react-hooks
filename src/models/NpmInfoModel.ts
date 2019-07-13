import { Model } from 'redux-model-ts';

interface Response {
  _id: string;
  license: string;
  homepage: string;
}

type Data = Partial<Response>;

class NpmInfoModel extends Model<Data> {
  manage = this.actionRequest({
    action: (packageName: string) => {
      return this.get<Response>({
        uri: '/' + packageName,
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

  reset = this.actionNormal({
    action: () => {
      return this.emit();
    },
    onSuccess: () => {
      return {};
    },
  });

  protected initReducer(): Data {
    return {};
  }
}

export const npmInfoModel = new NpmInfoModel();
