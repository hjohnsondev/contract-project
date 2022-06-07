export default function handler(req, res) {
  const { url } = req;

  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  const route = url.split("=")[1];

  //Redirect the user back to the page they're previewing.
  res.setHeader('Content-Type', 'text/html')
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${route}" />
    <script>window.location.href = '${route}'</script>
    </head>
    </html>`
  )
  res.end()
}