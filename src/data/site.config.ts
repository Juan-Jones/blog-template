interface CategoryMetadata {
	title: string
	description: string
	ogImage?: string
}

interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	categories: Record<string, CategoryMetadata>
}

export const siteConfig: SiteConfig = {
	site: 'https://earnonlinemoney.org/',
	author: 'Dejuan Jones',
	title: 'Earn Money Online',
	description:
		'Ultimate guide to earn money online free, quick or easy. Find trending side hustles, passive income ideas, cash injections online jobs & more.',
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Share this post',
	paginationSize: 14,
	categories: {
		freelancing: {
			title: 'Freelancing',
			description:
				'Navigate the freelance market with insights, resources, and tips to thrive in the gig economy.'
		},
		blogging: {
			title: 'Blogging',
			description:
				'Our blogging category has tips, strategies, and inspiration to enhance your blogging journey and grow your audience.'
		},
		ecommerce: {
			title: 'Ecommerce',
			description:
				'Find everything you need to know about Ecommerce in our digital store categories section and more.'
		},
		investment_strategies: {
			title: 'Investment Strategies',
			description:
				'Find investment tips, strategies, and deep insights in our investing articles category. Also learn how to save and more.'
		},
		side_hustles: {
			title: 'Side Hustles',
			description:
				'Everything you need to know on additional income opportunities in our side hustles category and more.'
		},
		online_business: {
			title: 'Online Business',
			description:
				'The online business category contains endless tips, information and instructions for launching, maintaining and growing a small business operation.'
		},
		social_media: {
			title: 'Social Medoia',
			description:
				'Explore social media marketing and its potential to elevate your brand to new heights. Discover innovative techniques to boost your online presence.'
		}
	}
}
