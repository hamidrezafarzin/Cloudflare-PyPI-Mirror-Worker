addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  // Cloudflare Worker URL
  const workerURL = 'https://worker_url';
  
  async function handleRequest(request) {
    const url = new URL(request.url);
    
    // Handle requests to the PyPI simple index
    if (url.pathname.startsWith('/pypi/')) {
      const pypiPath = url.pathname.replace('/pypi', '');
      const pypiUrl = `https://pypi.org${pypiPath}`;
      const response = await fetch(pypiUrl);
      let body = await response.text();
  
      // Rewrite URLs in the response body to go through the Cloudflare Worker
      body = body.replace(/https:\/\/files.pythonhosted.org/g, `${workerURL}/files`);
      return new Response(body, {
        headers: {'Content-Type': 'text/html'}
      });
    }
  
    // Handle requests to files.pythonhosted.org
    if (url.pathname.startsWith('/files/')) {
      const filePath = url.pathname.replace('/files', '');
      const fileUrl = `https://files.pythonhosted.org${filePath}`;
      const response = await fetch(fileUrl);
      // Ensure the response is forwarded as a binary stream
      return new Response(response.body, {
        headers: response.headers
      });
    }
  
    return new Response('This worker serves PyPI packages and their files', {status: 200});
  }