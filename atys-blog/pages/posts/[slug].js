
import Layout from '../../components/Layout'
import { getPostSlugs, getPostBySlugWithHtml } from '../../lib/posts'

export default function Post({ post }) {
  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto py-6 bg-white p-6 rounded">
        <h1>{post.meta.title}</h1>
        <p className="text-sm text-atysGray-500">{post.meta.date} • {post.meta.author}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const slugs = getPostSlugs().map(s => s.replace(/\.md$/, ''))
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlugWithHtml(params.slug)
  return { props: { post } }
}
