import { Observable } from '@nativescript/core';
import { setOnboardingComplete } from '../../services/app-settings';

export class OnboardingViewModel extends Observable {
    private _slides = [
        {
            icon: '📚',
            title: 'Learn Marketing',
            description: 'Learn marketing from scratch with easy tutorials and practical examples.'
        },
        {
            icon: '📊',
            title: 'Create Your Plan',
            description: 'Build a personalized marketing plan tailored to your business needs.'
        },
        {
            icon: '📈',
            title: 'Track Success',
            description: 'Monitor your campaign performance and optimize for better results.'
        },
        {
            icon: '🎯',
            title: 'Daily Tips',
            description: 'Get daily marketing tips and join community challenges.'
        }
    ];
    private _currentSlideIndex = 0;

    constructor() {
        super();
    }

    get slides() {
        return this._slides;
    }

    get currentSlideIndex() {
        return this._currentSlideIndex;
    }

    set currentSlideIndex(value: number) {
        if (this._currentSlideIndex !== value) {
            this._currentSlideIndex = value;
            this.notifyPropertyChange('currentSlideIndex', value);
        }
    }

    onNextOrComplete() {
        if (this.currentSlideIndex === this.slides.length - 1) {
            this.completeOnboarding();
        } else {
            this.currentSlideIndex++;
        }
    }

    onSkip() {
        this.completeOnboarding();
    }

    private completeOnboarding() {
        setOnboardingComplete();
        const frame = require('@nativescript/core').Frame;
        frame.topmost().navigate({
            moduleName: 'views/personalization/personalization-page',
            clearHistory: true
        });
    }
}