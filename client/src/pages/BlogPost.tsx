import SiteFooter from "@/components/SiteFooter";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { Link, useRoute } from "wouter";
import { Streamdown } from "streamdown";
import ServicesHeader from "@/components/ServicesHeader";
import { blogArticles } from "@/lib/blogArticles";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const article = blogArticles.find((item) => item.slug === params?.slug);
  if (!article) return <div className="blog-post-page"><ServicesHeader /><main className="not-found-state"><span className="mono-label accent-label">ARTICLE NOT FOUND</span><h1>That page is no longer in the archive.</h1><Link href="/blog" className="button button-primary">Back to the blog <ArrowUpRight size={17} /></Link></main></div>;
  const related = blogArticles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3);
  const recent = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 4);
  const categories = Array.from(new Set(blogArticles.map((item) => item.category)));
  const wordCount = article.content.split(/\s+/).length;
  const minutes = Math.max(3, Math.round(wordCount / 190));
  return <div className="blog-post-page"><ServicesHeader />
    <main><section className="article-top section-pad"><nav className="article-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><Link href={`/blog#${article.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}>{article.category}</Link><span>/</span><strong>{article.title}</strong></nav><div className="article-meta"><span>{article.category}</span><span><CalendarDays size={13} /> {article.date}</span><span><Clock3 size={13} /> {minutes} min read</span></div><h1>{article.title}</h1><p className="article-dek">Practical perspective from the eDataShop archive on accuracy, security, process, and the human systems behind dependable information.</p><div className="article-cover"><img src={article.image} alt="" /><span className="mono-label">EDS / ARTICLE {String(blogArticles.indexOf(article) + 1).padStart(2, "0")}</span></div></section>
      <section className="article-body-wrap section-pad section-white"><aside className="article-aside"><Link href="/blog" className="article-back-link"><ArrowLeft size={15} /> All articles</Link><div className="article-side-block"><span className="mono-label accent-label">RECENT POSTS</span><div className="article-side-posts">{recent.map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}><span>{item.category}</span><strong>{item.title}</strong></Link>)}</div></div><div className="article-side-block"><span className="mono-label accent-label">CATEGORIES</span><div className="article-categories">{categories.map((category) => <Link href={`/blog#${category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} key={category}>{category}<ArrowUpRight size={13} /></Link>)}</div></div></aside><article className="article-body"><Streamdown>{article.content}</Streamdown><div className="article-end-note"><span className="mono-label">THE DATA SHOP VIEW</span><p>Good data work is careful, accountable, and designed for the decisions that come next.</p></div></article></section>
      {related.length > 0 && <section className="related-articles section-pad"><div className="section-heading split-heading"><div><span className="mono-label accent-label">Keep reading</span><h2>More from <span>{article.category.toLowerCase()}.</span></h2></div><p>Continue through the archive for practical guidance on making information accurate, secure, and ready to use.</p></div><div className="related-grid">{related.map((item) => <Link href={`/blog/${item.slug}`} className="related-card" key={item.slug}><img src={item.image} alt="" /><div><span className="mono-label">{item.category}</span><h3>{item.title}</h3><ArrowUpRight size={17} /></div></Link>)}</div></section>}
      <section id="contact" className="blog-contact section-pad"><span className="mono-label contact-label">KEEP THE CONVERSATION GOING</span><h2>Bring us your<br /><em>messy part.</em></h2><p>Have a workflow question, a backlog, or a collection waiting to be digitised?</p><a className="button button-dark" href="mailto:info@edatashop.com?subject=Let's%20talk%20about%20data">Talk to a data expert <ArrowUpRight size={18} /></a></section></main>
      <SiteFooter /></div>;
}
