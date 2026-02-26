export default async function handler(req) {
  const { type, id } = req.query;
  const url = `https://lciutunqbvhnvdzwmwaf.supabase.co/functions/v1/share-handler/${type}/${id}`;
  
  const response = await fetch(url, {
    headers: {
      'User-Agent': req.headers['user-agent'] || '',
    },
  });
  
  const body = await response.text();
  return new Response(body, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('content-type') || 'text/html',
      'Cache-Control': 'no-cache',
    },
  });
}
