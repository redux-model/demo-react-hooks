import { HttpError, HttpService, HttpTransform } from '@redux-model/web';

class Api extends HttpService {
  protected baseUrl(): string {
    return 'https://registry.npm.taobao.org';
  }

  protected headers(): object {
    return {
      Accept: 'application/json',
    };
  }

  protected onRespondError(error: HttpError<{ error: string, reason: string }>, transform: HttpTransform): void {
    if (error.response.data && error.response.data.reason) {
      transform.errorMessage = error.response.data.reason;
    }
  }

  protected onShowError(successText: string): void {
    console.info(successText);
    alert(successText);
  }

  protected onShowSuccess(errorText: string): void {
    console.error(errorText);
    alert(errorText);
  }
}

export const api = new Api();
