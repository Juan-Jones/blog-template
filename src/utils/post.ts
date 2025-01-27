import { getCollection } from 'astro:content'

// Define category order directly here instead of importing from site config
export const CATEGORIES = [
	'Blogging',
	'Freelancing',
	'Ecommerce',
	'Investing',
	'Side Hustles',
	'Online Business',
	'Social Media',
	'Courses'
]

// Function to fetch all categories dynamically from blog posts
export const getCategories = async () => {
	const posts = await getCollection('blog')

	const categories = new Set(
		posts.filter((post) => !post.data.draft).map((post) => post.data.category)
	)

	return Array.from(categories).sort((a, b) => {
		const indexA = CATEGORIES.indexOf(a)
		const indexB = CATEGORIES.indexOf(b)

		// Sort based on predefined order in CATEGORIES
		if (indexA !== -1 && indexB !== -1) {
			return indexA - indexB
		}
		// If category not found in predefined list, push it to the end
		return indexA !== -1 ? -1 : indexB !== -1 ? 1 : 0
	})
}

// Function to get latest posts with optional limit
export const getPosts = async (max?: number) => {
	const posts = await getCollection('blog')
	return posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

// Function to get all unique tags from posts
export const getTags = async () => {
	const posts = await getCollection('blog')
	const tags = new Set<string>()

	posts
		.filter((post) => !post.data.draft)
		.forEach((post) => {
			post.data.tags.forEach((tag) => {
				tags.add(tag.toLowerCase())
			})
		})

	return Array.from(tags)
}

// Function to filter posts by tag
export const getPostByTag = async (tag: string) => {
	const posts = await getPosts()
	const lowercaseTag = tag.toLowerCase()

	return posts.filter((post) =>
		post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
	)
}

// Function to filter posts by category
export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	const lowercaseCategory = category.toLowerCase()

	return posts.filter((post) => post.data.category.toLowerCase() === lowercaseCategory)
}
