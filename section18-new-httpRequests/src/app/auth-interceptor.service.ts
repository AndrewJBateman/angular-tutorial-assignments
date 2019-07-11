// this interceptor runs authentication code before the http request leaves the app. Next.handle lets the code leave the app.
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

// implements the httpinterceptor interface
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    });
    return next.handle(modifiedRequest);
  }
}
