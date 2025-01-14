interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://earnonlinemoney.org/', // Write here your website url
	author: 'Dejuan Jones', // Site author
	title: 'Earn Money Online', // Site title.
	description:
		'Ultimate guide to earn money online free, quick or easy. Find trending side hustles, passive income ideas, cash injections online jobs & more.', // Description to display in the meta tags
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 12 // Number of posts per page
}
