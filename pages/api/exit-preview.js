export default function handler(req, res) {
  const { url } = req.query;

  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  //Redirect the user back to the page they're previewing.
  res.setHeader('Content-Type', 'text/html')
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`
  )
  res.end()
}