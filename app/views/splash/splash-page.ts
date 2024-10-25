import { NavigatedData, Page } from '@nativescript/core';
import { shouldShowOnboarding } from '../../services/app-settings';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    
    setTimeout(() => {
        const nextPage = 'views/auth/auth-page';
        page.frame.navigate({
            moduleName: nextPage,
            clearHistory: true,
            transition: {
                name: 'fade',
                duration: 300
            }
        });
    }, 2500);
}