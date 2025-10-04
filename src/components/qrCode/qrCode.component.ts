import qrCodeTemplate from './qrCode.template.html?raw';

export class QrCodeComponent {
    constructor() {}

    render(): string {
        return qrCodeTemplate;
    }
}