import { HttpResponse, HttpService } from '@redux-model/web';

export const $api = new HttpService({
  baseUrl: 'https://registry.npm.taobao.org',
  headers: () => {
    return {
      Accept: 'application/json',
    };
  },
  isSuccess: (response) => {
    console.log(response.data);
    // if (response.data._id === 'react-native') {
    //   return false;
    // }

    return true;
  },
  onRespondError: (response: HttpResponse<{ error: string, reason: string }>, transform) => {
    if (response.data && response.data.reason) {
      transform.message = response.data.reason;
    }
  },
  onShowSuccess: (successText: string) => {
    console.info(successText);
    alert(successText);
  },
  onShowError: (errorText: string) => {
    console.error(errorText);
    alert(errorText);
  },
});
