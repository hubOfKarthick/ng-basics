import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpSentEvent } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { DemoService } from './services/demo.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
    constructor(private demoService: DemoService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        // const currentUser = this.authenticationService.currentUserValue;
        // if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    // Authorization: `Basic ${currentUser.authdata}`
                    userId: '12345'
                },
            });
        // }

        return next.handle(request)
        // .pipe(
        //     map((event: HttpEvent<any>) => {
        //         if (event && event instanceof HttpResponse) {
        //             event.body.
        //         }
        //         console.log(event);
        //         return null;
        //     })
        // );
    }
}