import { ApplicationSettings } from '@nativescript/core';

export function initializeApp() {
    // Check if it's the first launch
    if (!ApplicationSettings.getBoolean('hasLaunched', false)) {
        ApplicationSettings.setBoolean('hasLaunched', true);
        ApplicationSettings.setBoolean('shouldShowOnboarding', true);
    }
}

export function setOnboardingComplete() {
    ApplicationSettings.setBoolean('shouldShowOnboarding', false);
}

export function shouldShowOnboarding(): boolean {
    return ApplicationSettings.getBoolean('shouldShowOnboarding', true);
}