declare module 'link-preview-generator' {
    type LinkPreviewResult = {
        title: string;
        description: string;
        domain: string;
        img: string;
    }

    export default function(
        uri: string,
        puppeteerArgs?: string[],
        puppeteerAgent?: string,
        executablePath?: string
    ): Promise<LinkPreviewResult>;
}