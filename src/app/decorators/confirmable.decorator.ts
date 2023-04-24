
// Where “target” represents the class containing the method we’re decorating,
export function actualDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  console.log('target', descriptor)
  descriptor.value = function (...args: any[]) {
    // console.log(`Calling method ${propertyKey}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

// https://levelup.gitconnected.com/building-custom-typescript-decorators-for-angular-4595816e7b87
// https://medium.com/capital-one-tech/custom-typescript-decorators-using-rxjs-and-angular-services-6ddd1079f683


import { Inject, Type, inject } from '@angular/core';
import { take } from 'rxjs/operators';
import { AppModule } from '../app.module';
import { ConfirmServiceService } from '../confirm-service.service';

// Pass confirmService as option of decorator in prop confirm
// to access to that service and use confirm function
export function Confirmable(
  options?: any
) {
  // our factory function will return our actual decorator function, but now we have
  // an actual options object to configure our alert box :)
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    // the usual, caching the original implementation
    const originalMethod = descriptor.value;
    // default values for our config, we’ll overwrite this with our options parameter


    descriptor.value = function (...args: any[]) {
      const service = AppModule?.injector.get<ConfirmServiceService>(ConfirmServiceService as Type<ConfirmServiceService>)
      const dialogRef = service.confirm(options);
      return dialogRef.pipe(take(1)).subscribe((confirmed: boolean) => {
        if (!!confirmed) {
          originalMethod.apply(this,[ ...args]);
        }
      });
    };
    return descriptor;
  };
}

  // @Confirmable({
  //   title: 'Delete Confirmation', 
  //   decription: 'Are you sure you want to delete?',
  //   leftSideButton: 'Cancel',
  //   rightSideButton: 'Save',
  // })
  // to call this decorator place above any method that to take user action
  // @actualDecorator