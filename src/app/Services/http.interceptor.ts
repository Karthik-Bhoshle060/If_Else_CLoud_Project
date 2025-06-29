import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);

  loaderService.show();
  return next(req);
};
