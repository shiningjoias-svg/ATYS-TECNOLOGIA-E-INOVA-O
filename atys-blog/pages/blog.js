
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'
import ArticleCard from '../components/ArticleCard'

export default function Blog({ posts }) {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Notícias</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p => <ArticleCard key={p.slug} post={p} />)}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts().map(p => ({ slug: p.slug, meta: p.meta }))
  return { props: { posts } }
}
