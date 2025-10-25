
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'
import ArticleCard from '../components/ArticleCard'

export default function Home({ posts }) {
  const featured = posts.slice(0,4)
  return (
    <Layout>
      <section className="bg-white rounded p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Saia do improviso e alcance a excelência</h1>
        <p className="mb-4 text-atysGray-500">Simplifique a gestão da sua empresa com tecnologia, automação e inteligência.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Últimos artigos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map(p => <ArticleCard key={p.slug} post={p} />)}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts().map(p => ({ slug: p.slug, meta: p.meta }))
  return { props: { posts } }
}
