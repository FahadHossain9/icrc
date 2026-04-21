import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { legacySlugs } from '../legacySlugs';

function stripBottompartTarget(html: string): string {
  return html.replace(/\s*target="bottompart"/gi, '');
}

function extractBody(html: string): string {
  const m = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return m ? m[1] : html;
}

const legacySlugSet = new Set<string>(legacySlugs);

type Props = {
  slug?: string;
};

export function LegacyPage({ slug: slugOverride }: Props) {
  const { slug: slugParam } = useParams();
  const slug = slugOverride ?? slugParam ?? 'body';
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoadError(null);
    setHtml(null);

    if (!legacySlugSet.has(slug)) {
      setLoadError('Unknown page.');
      return;
    }

    if (slug === 'photogallery') {
      return;
    }

    (async () => {
      try {
        const res = await fetch(`/legacy-html/${encodeURIComponent(slug)}.html`);
        if (!res.ok) throw new Error(`${res.status}`);
        const buf = await res.arrayBuffer();
        const dec = new TextDecoder('windows-1252');
        const raw = dec.decode(buf);
        if (!cancelled) setHtml(stripBottompartTarget(extractBody(raw)));
      } catch {
        if (!cancelled) setLoadError('Could not load this page.');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const a = t.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      if (/^https?:\/\//i.test(href)) return;

      const clean = href.replace(/^\.\//, '');
      if (clean.endsWith('.html')) {
        e.preventDefault();
        const base = clean.replace(/\.html$/i, '');
        navigate(`/${encodeURIComponent(base)}`);
      }
    };

    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [html, navigate]);

  if (loadError) {
    return (
      <div className="legacy-page legacy-page--missing">
        <p>{loadError}</p>
      </div>
    );
  }

  if (slug === 'photogallery') {
    return (
      <iframe
        title="Photo gallery (legacy)"
        className="legacy-iframe"
        src="/legacy-html/photogallery.html"
      />
    );
  }

  if (html === null) {
    return (
      <div className="legacy-page legacy-page--loading">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="legacy-html"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
