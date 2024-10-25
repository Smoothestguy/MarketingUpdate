import { NavigatedData, Page } from '@nativescript/core';
import { PersonalizationViewModel } from './personalization-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new PersonalizationViewModel();
}