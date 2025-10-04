import appContentTemplate from './appContent.template.html?raw'
import navTemplate from './nav.template.html?raw';

export class AppContent {
    public render(): string {
        return appContentTemplate.replace("{navigation}", navTemplate);
    }
}