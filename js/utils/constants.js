// Constantes de la aplicación TaskManager

export const PRIORITIES = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low'
};

export const CATEGORIES = {
    PERSONAL: 'personal',
    WORK: 'work',
    STUDY: 'study',
    HEALTH: 'health',
    OTHER: 'other'
};

export const STORAGE_KEYS = {
    TASKS: 'taskmanager_tasks',
    THEME: 'taskmanager_theme',
    SETTINGS: 'taskmanager_settings'
};

export const PRIORITY_LABELS = {
    [PRIORITIES.HIGH]: 'Alta',
    [PRIORITIES.MEDIUM]: 'Media',
    [PRIORITIES.LOW]: 'Baja'
};

export const CATEGORY_LABELS = {
    [CATEGORIES.PERSONAL]: 'Personal',
    [CATEGORIES.WORK]: 'Trabajo',
    [CATEGORIES.STUDY]: 'Estudio',
    [CATEGORIES.HEALTH]: 'Salud',
    [CATEGORIES.OTHER]: 'Otro'
};

export const FILTER_OPTIONS = {
    STATUS: {
        ALL: 'all',
        PENDING: 'pending',
        COMPLETED: 'completed'
    },
    SORT: {
        CREATED: 'created',
        DUE_DATE: 'dueDate',
        PRIORITY: 'priority',
        TITLE: 'title'
    }
};