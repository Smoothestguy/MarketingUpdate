import { Observable, Frame, ApplicationSettings } from '@nativescript/core';

export class AuthViewModel extends Observable {
    private _isSignIn = true;
    private _email = '';
    private _password = '';
    private _fullName = '';

    constructor() {
        super();
    }

    get isSignIn(): boolean {
        return this._isSignIn;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        if (this._fullName !== value) {
            this._fullName = value;
            this.notifyPropertyChange('fullName', value);
        }
    }

    onTabTap(args) {
        const tab = args.object.get('data-tab');
        this._isSignIn = tab === 'signin';
        this.notifyPropertyChange('isSignIn', this._isSignIn);
    }

    private navigateToOnboarding() {
        const frame = Frame.topmost();
        frame.navigate({
            moduleName: 'views/onboarding/onboarding-page',
            clearHistory: true,
            transition: {
                name: 'fade',
                duration: 300
            }
        });
    }

    private validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private validatePassword(password: string): boolean {
        return password.length >= 6;
    }

    onSignIn() {
        if (!this._email || !this._password) {
            alert('Please fill in all fields');
            return;
        }

        if (!this.validateEmail(this._email)) {
            alert('Please enter a valid email address');
            return;
        }

        // For demo purposes, we'll simulate a successful login
        const preferences = {
            email: this._email,
            fullName: 'User',
            isAuthenticated: true
        };
        ApplicationSettings.setString('userPreferences', JSON.stringify(preferences));
        this.navigateToOnboarding();
    }

    onSignUp() {
        if (!this._email || !this._password || !this._fullName) {
            alert('Please fill in all fields');
            return;
        }

        if (!this.validateEmail(this._email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!this.validatePassword(this._password)) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // For demo purposes, we'll simulate a successful registration
        const preferences = {
            email: this._email,
            fullName: this._fullName,
            isAuthenticated: true
        };
        ApplicationSettings.setString('userPreferences', JSON.stringify(preferences));
        this.navigateToOnboarding();
    }

    onForgotPassword() {
        alert('Reset password functionality coming soon!');
    }

    onGoogleSignIn() {
        const preferences = {
            email: 'google.user@example.com',
            fullName: 'Google User',
            isAuthenticated: true
        };
        ApplicationSettings.setString('userPreferences', JSON.stringify(preferences));
        this.navigateToOnboarding();
    }

    onFacebookSignIn() {
        const preferences = {
            email: 'facebook.user@example.com',
            fullName: 'Facebook User',
            isAuthenticated: true
        };
        ApplicationSettings.setString('userPreferences', JSON.stringify(preferences));
        this.navigateToOnboarding();
    }

    onAppleSignIn() {
        const preferences = {
            email: 'apple.user@example.com',
            fullName: 'Apple User',
            isAuthenticated: true
        };
        ApplicationSettings.setString('userPreferences', JSON.stringify(preferences));
        this.navigateToOnboarding();
    }
}