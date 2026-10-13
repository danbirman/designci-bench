import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export function LatestPosts() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3)

  if (!posts.length) {
    return null
  }

  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-[18px] text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Latest from the blog
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Notes on building Taxonomy and the patterns behind it.
        </p>
      </div>
      <div className="mx-auto flex max-w-[64rem] gap-[22px]">
        {posts.map((post) => (
          <article
            key={post._id}
            className="relative min-w-[300px] flex-1 space-y-2 rounded-lg border p-6"
          >
            <h3 className="font-bold">{post.title}</h3>
            {post.description && (
              <p className="text-sm text-muted-foreground">
                {post.description}
              </p>
            )}
            <p className="text-xs text-muted-foreground/60">
              {formatDate(post.date)}
            </p>
            <Link href={post.slug} className="absolute inset-0">
              <span className="sr-only">Read {post.title}</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
