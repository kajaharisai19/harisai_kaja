export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Hari Sai Kaja
        </h1>

        <p className="mt-4 text-base leading-7 text-neutral-600">
          Full-stack Software Engineer with 5+ years of experience building SaaS
          fintech platforms, scalable APIs, and automated tools using PHP/Laravel,
          JavaScript/Node.js, and React. Currently pursuing an MS in Applied
          Computer Science at GVSU.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            className="rounded-md border px-4 py-2 text-sm hover:bg-neutral-50"
            href="https://www.linkedin.com/in/kajaharisai/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90"
            href="mailto:kaja.harisai19@gmail.com"
          >
            Email
          </a>
        </div>
      </section>
    </main>
  );
}
