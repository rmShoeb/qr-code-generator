export interface NavigationItem {
    id: string; // use this with "name" as well
    title: string;
    isActive: boolean;
}

export const navigationItems: NavigationItem[] = [
    { id: 'wifi-qr-generator', title: 'For WiFi', isActive: true },
    { id: 'about', title: 'From Image', isActive: false },
    { id: 'contact', title: 'From Text', isActive: false },
];