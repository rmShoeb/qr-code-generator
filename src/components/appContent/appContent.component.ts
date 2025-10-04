import { navigationItems } from '../../types/navigation.type';
import { renderSingleNavigation } from '../navigation/navigation.component';
import { QrCodeComponent } from '../qrCode/qrCode.component';
import appContentTemplate from './appContent.template.html?raw'

export class AppContent {
    constructor() {
        // Attach handler to window to make it globally accessible
        (window as any).handleNavClick = this.onNavItemClick.bind(this);
    }

    public render(): string {
        const qrCodeComponent = new QrCodeComponent();
        const navigationBar = navigationItems
                .map(navitem => renderSingleNavigation(navitem, "handleNavClick(event)"))
                .join("");
        return appContentTemplate
                .replace("{qrCodeComponent}", qrCodeComponent.render())
                .replace("{navigation}", navigationBar);
    }

    public onNavItemClick(event: Event): void {
        const selectedId = (event.target as HTMLInputElement).id;
        navigationItems.forEach(item => {
            item.isActive = item.id === selectedId;
        });
    }
}