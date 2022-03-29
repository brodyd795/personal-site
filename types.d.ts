declare module 'link-preview-js' {
	type LinkPreviewResult = {
		title: string;
		description: string;
		images: string[];
	};

	export function getLinkPreview(uri: string): Promise<LinkPreviewResult>;
}
