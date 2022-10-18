import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
        private _authService: AuthService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from your auth service.
        const token = this._authService.accessToken;

        //
        const clonedReq = this.addToken(req, token);
        return next.handle(clonedReq).pipe();
    }

    // Adds the token to your headers if it exists
    private addToken(request: HttpRequest<any>, token: any) {
        if (token) {
            console.log('INTERCEPTOR');
            let clone: HttpRequest<any>;
            clone = request.clone({
                setHeaders: {
                    Authorization: `Bearer `+ `${token}`
                }
            });
            return clone;
        }
        return request;
    }
}