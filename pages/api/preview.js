import { getBlogBySlug, getPreviewLandingBySlug } from "../../utils/api"

export default async function handler(req, res) {
  const { secret, environment, slug = null, blog = null } = req.query

  const isMatch = secret !== process.env.CONTENTFUL_PREVIEW_SECRET ? false : true;
  
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug && !blog) {
    return res.status(401).json({ message: 'Invalid token', yourKey: secret, environment, isMatch, slug: slug });
  }
  
  // Fetch the headless CMS to check if the provided `slug` exists
  if (slug) {
    const page = await getPreviewLandingBySlug(slug, environment)
    // If the slug doesn't exist prevent preview mode from being enabled
    if (!page.fields.sections.length) {
      return res.status(401).json({ message: 'Invalid slug' });
    }
  }

  if (blog) {
    const singleBlog = await getBlogBySlug(blog, { preview: true, environment: environment })
    // If the slug doesn't exist prevent preview mode from being enabled
    if (!singleBlog.title) {
      return res.status(401).json({ message: 'Invalid blog' });
    }
  }
  
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({environment});
  
  const url = slug ? `/${slug}` : `/blog/${blog}`;
  res.setHeader('Content-Type', 'text/html')
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`
  )
  res.end()
}