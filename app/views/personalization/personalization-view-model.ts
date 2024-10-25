import { Observable } from '@nativescript/core';

export class PersonalizationViewModel extends Observable {
    private _businessTypes = ['Small Business', 'Startup', 'Enterprise', 'Freelancer'];
    private _industries = ['Technology', 'Retail', 'Healthcare', 'Education', 'Finance', 'Other'];
    private _businessSizes = ['1-10', '11-50', '51-200', '201+'];
    private _marketingGoals = [
        { name: 'Generate Leads', selected: false },
        { name: 'Build Brand Awareness', selected: false },
        { name: 'Increase Sales', selected: false },
        { name: 'Improve Online Presence', selected: false },
        { name: 'Engage Current Customers', selected: false }
    ];

    private _selectedBusinessTypeIndex = 0;
    private _selectedIndustryIndex = 0;
    private _selectedBusinessSizeIndex = 0;

    constructor() {
        super();
    }

    get businessTypes() {
        return this._businessTypes;
    }

    get industries() {
        return this._industries;
    }

    get businessSizes() {
        return this._businessSizes;
    }

    get marketingGoals() {
        return this._marketingGoals;
    }

    get selectedBusinessTypeIndex() {
        return this._selectedBusinessTypeIndex;
    }

    set selectedBusinessTypeIndex(value: number) {
        if (this._selectedBusinessTypeIndex !== value) {
            this._selectedBusinessTypeIndex = value;
            this.notifyPropertyChange('selectedBusinessTypeIndex', value);
        }
    }

    get selectedIndustryIndex() {
        return this._selectedIndustryIndex;
    }

    set selectedIndustryIndex(value: number) {
        if (this._selectedIndustryIndex !== value) {
            this._selectedIndustryIndex = value;
            this.notifyPropertyChange('selectedIndustryIndex', value);
        }
    }

    get selectedBusinessSizeIndex() {
        return this._selectedBusinessSizeIndex;
    }

    set selectedBusinessSizeIndex(value: number) {
        if (this._selectedBusinessSizeIndex !== value) {
            this._selectedBusinessSizeIndex = value;
            this.notifyPropertyChange('selectedBusinessSizeIndex', value);
        }
    }

    onSaveAndContinue() {
        // Save preferences
        const preferences = {
            businessType: this._businessTypes[this._selectedBusinessTypeIndex],
            industry: this._industries[this._selectedIndustryIndex],
            businessSize: this._businessSizes[this._selectedBusinessSizeIndex],
            marketingGoals: this._marketingGoals.filter(goal => goal.selected).map(goal => goal.name)
        };

        // Save to app settings
        const ApplicationSettings = require('@nativescript/core').ApplicationSettings;
        ApplicationSettings.setString('userPreferences', JSON.stringify(preferences));

        // Navigate to home
        const frame = require('@nativescript/core').Frame;
        frame.topmost().navigate({
            moduleName: 'views/main/home-page',
            clearHistory: true
        });
    }
}