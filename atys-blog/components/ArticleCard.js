
import Link from 'next/link'
export default function ArticleCard({ post }) {
  const meta = post.meta || post
  return (
    <article className="bg-white rounded shadow p-4">
      <div className="text-sm text-atysBlue font-semibold mb-2">{meta.category || 'Tecnologia'}</div>
      <h3 className="text-lg font-bold mb-2">{meta.title}</h3>
      <p className="text-sm text-atysGray-500 mb-4">{meta.excerpt}</p>
      <Link href={`/posts/${post.slug}`}><a className="text-sm font-medium">Ler mais →</a></Link>
    </article>
  )
}
