import { Observable } from '@nativescript/core';

export class LearnViewModel extends Observable {
    private _categories = [
        { id: 'all', name: 'All', isSelected: true },
        { id: 'social', name: 'Social Media', isSelected: false },
        { id: 'seo', name: 'SEO', isSelected: false },
        { id: 'email', name: 'Email', isSelected: false },
        { id: 'content', name: 'Content', isSelected: false },
        { id: 'analytics', name: 'Analytics', isSelected: false }
    ];

    private _currentCourse = {
        title: 'Social Media Marketing Mastery',
        description: 'Master the art of social media marketing with practical examples.',
        progress: 45
    };

    private _courses = [
        {
            id: 1,
            icon: '📱',
            title: 'Social Media Marketing Mastery',
            description: 'Learn how to create engaging content that converts followers into customers.',
            duration: '4h 30m',
            level: 'Beginner',
            category: 'social',
            progress: 45,
            lessons: [
                { title: 'Introduction to Social Media Marketing', duration: '15m' },
                { title: 'Creating Engaging Content', duration: '45m' },
                { title: 'Building Your Community', duration: '30m' }
            ]
        },
        {
            id: 2,
            icon: '🔍',
            title: 'SEO Fundamentals',
            description: 'Master the basics of Search Engine Optimization.',
            duration: '3h 45m',
            level: 'Intermediate',
            category: 'seo',
            progress: 0,
            lessons: [
                { title: 'Understanding Search Engines', duration: '30m' },
                { title: 'Keyword Research', duration: '45m' },
                { title: 'On-Page SEO', duration: '45m' }
            ]
        },
        {
            id: 3,
            icon: '📧',
            title: 'Email Marketing Essentials',
            description: 'Build and nurture your email list effectively.',
            duration: '2h 15m',
            level: 'Beginner',
            category: 'email',
            progress: 0,
            lessons: [
                { title: 'Email Marketing Basics', duration: '30m' },
                { title: 'Building Your List', duration: '45m' },
                { title: 'Writing Effective Emails', duration: '30m' }
            ]
        }
    ];

    private _selectedCategory = 'all';

    constructor() {
        super();
    }

    get categories() {
        return this._categories;
    }

    get currentCourse() {
        return this._currentCourse;
    }

    get filteredCourses() {
        if (this._selectedCategory === 'all') {
            return this._courses;
        }
        return this._courses.filter(course => course.category === this._selectedCategory);
    }

    onCategoryTap(args) {
        const tappedCategory = args.object.bindingContext;
        this._categories.forEach(category => {
            category.isSelected = category.id === tappedCategory.id;
        });
        this._selectedCategory = tappedCategory.id;
        this.notifyPropertyChange('categories', this._categories);
        this.notifyPropertyChange('filteredCourses', this.filteredCourses);
    }

    onContinueCourse() {
        console.log('Continue course:', this._currentCourse.title);
    }

    onCourseTap(args) {
        const tappedCourse = args.object.bindingContext;
        console.log('Opening course:', tappedCourse.title);
    }

    onSearch() {
        console.log('Opening search');
    }
}