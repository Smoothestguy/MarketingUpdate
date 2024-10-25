import { Application } from '@nativescript/core';
import { initializeApp } from './services/app-settings';

// Initialize app settings
initializeApp();

Application.run({ moduleName: 'app-root' });