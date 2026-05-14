export default function HomePage() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center', maxWidth: 600 }}>
        <h1>FBC Sales Backend</h1>
        <p>Dies ist ein Next.js-Backend mit API-Endpunkten und geschützt durch Basic Auth.</p>
        <p>
          API-Beispiel: <code>/api/hello</code>
        </p>
      </div>
    </main>
  );
}
