import { Observable, ApplicationSettings } from '@nativescript/core';

export class HomeViewModel extends Observable {
    private _welcomeMessage: string;
    private _dailyTip: string;
    private _featuredLesson: any;
    private _activeChallenge: any;

    constructor() {
        super();

        // Get user preferences
        const preferences = JSON.parse(ApplicationSettings.getString('userPreferences', '{}'));
        const userName = preferences.fullName || 'Marketer';

        this._welcomeMessage = `Hi ${userName}! Ready to grow your business today?`;
        this._dailyTip = "💡 Tip: Engage with your audience through storytelling to build stronger connections.";
        
        this._featuredLesson = {
            title: "Social Media Marketing Mastery",
            description: "Learn how to create engaging content that converts followers into customers.",
            progress: 35
        };

        this._activeChallenge = {
            title: "7-Day Email List Growth Challenge",
            description: "Grow your email list by implementing proven lead magnet strategies.",
            progress: 60,
            daysLeft: 3
        };
    }

    get welcomeMessage(): string {
        return this._welcomeMessage;
    }

    get dailyTip(): string {
        return this._dailyTip;
    }

    get featuredLesson(): any {
        return this._featuredLesson;
    }

    get activeChallenge(): any {
        return this._activeChallenge;
    }

    onNotifications() {
        console.log("Opening notifications");
    }

    onProfile() {
        console.log("Opening profile");
    }

    onFeaturedLesson() {
        console.log("Opening featured lesson");
    }

    onMarketingPlan() {
        console.log("Opening marketing plan");
    }

    onCampaignTracker() {
        console.log("Opening campaign tracker");
    }

    onCaseStudies() {
        console.log("Opening case studies");
    }

    onAnalytics() {
        console.log("Opening analytics");
    }

    onActiveChallenge() {
        console.log("Opening active challenge");
    }
}