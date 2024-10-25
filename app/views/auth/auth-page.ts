import { NavigatedData, Page } from '@nativescript/core';
import { AuthViewModel } from './auth-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    if (!page.bindingContext) {
        page.bindingContext = new AuthViewModel();
    }
}