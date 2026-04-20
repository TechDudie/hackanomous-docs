import RocketIcon from '@lucide/svelte/icons/rocket';
import type { DocsConfig } from './types.js';

export const docsConfig: DocsConfig = {
	site: {
		title: 'Hackanomous',
		description: 'Hackanomous YSWS',
		social: {
			github: 'https://github.com/SmartSparkCoding/hackanomous'
		}
	},
	sidebar: [
		{
			label: 'Getting Started',
			icon: RocketIcon,
			autogenerate: { directory: 'getting-started' }
		}
	],
	toc: {
		minDepth: 2,
		maxDepth: 3
	}
	// Uncomment to enable version selector:
	// versions: {
	// 	current: 'v1.0.0',
	// 	versions: [
	// 		{ label: 'v1.0.0 (latest)', href: '/docs' }
	// 	]
	// }
};
