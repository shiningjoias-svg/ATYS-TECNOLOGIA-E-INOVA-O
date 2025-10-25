
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug: realSlug, meta: data, content }
}

export async function getPostBySlugWithHtml(slug) {
  const post = getPostBySlug(slug)
  const processed = await remark().use(html).process(post.content)
  const contentHtml = processed.toString()
  return { slug: post.slug, meta: post.meta, contentHtml }
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug))
  posts.sort((a,b) => new Date(b.meta.date) - new Date(a.meta.date))
  return posts
}
