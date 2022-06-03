import { getPreviewLandingBySlug } from "../../utils/api"

export default async function handler(req, res) {
  const { secret, slug } = req.query

  /* 
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  */

  // Fetch the headless CMS to check if the provided `slug` exists
  const page = await getPreviewLandingBySlug(slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page.fields.sections.length) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  res.redirect(`/${page.fields.slug}`)
}