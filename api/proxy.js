export default async function handler(req) {
  const { type, id } = req.query;

  const url = `https://lciutunqbvhnvdzwmwaf.supabase.co/functions/v1/share-handler/${type}/${id}`;

  const response = await fetch(url, {
    headers: {
      'User-Agent': req.headers['user-agent'] || '',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjaXV0dW5xYnZobnZkendtd2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTQyODIsImV4cCI6MjA4MDY1NDI4Mn0.dRicEPRGPlnu8-c4MlnWVoRZa1QFHa8BX3MTrSPbEwQ',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjaXV0dW5xYnZobnZkendtd2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTQyODIsImV4cCI6MjA4MDY1NDI4Mn0.dRicEPRGPlnu8-c4MlnWVoRZa1QFHa8BX3MTrSPbEwQ',
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
