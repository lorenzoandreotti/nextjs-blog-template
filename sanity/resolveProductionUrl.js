export default function resolveProductionUrl(document) {
  return `https://nextjs-blog-template-73.netlify.app/posts/${document.slug.current}`;
}
