import { Download, ExternalLink, FileText } from "lucide-react";
import type { BlogBlock, BugSeverity } from "@/lib/blog";

const severityStyles: Record<BugSeverity, string> = {
  Critical: "bg-red-500/20 text-red-300",
  High: "bg-orange-500/20 text-orange-300",
  Medium: "bg-yellow-500/20 text-yellow-200",
  Low: "bg-slate-500/20 text-slate-200",
};

function SeverityBadge({ severity }: { severity: BugSeverity }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${severityStyles[severity]}`}
    >
      {severity}
    </span>
  );
}

function cellIsSeverity(value: string): value is BugSeverity {
  return value === "Critical" || value === "High" || value === "Medium" || value === "Low";
}

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="blog-prose">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return <p key={index}>{block.text}</p>;
          case "h2":
            return <h2 key={index}>{block.text}</h2>;
          case "h3":
            return <h3 key={index}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} start={block.start}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "code":
            return (
              <pre key={index} className="code-block">
                <code>{block.code}</code>
              </pre>
            );
          case "callout":
            return (
              <aside key={index} className="blog-callout">
                {block.text}
              </aside>
            );

          case "image":
            return (
              <figure key={index} className="blog-figure">
                <div className="w-full overflow-hidden rounded-2xl border border-line bg-panel">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={block.src} alt={block.alt} className="h-auto w-full" loading="lazy" />
                </div>
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );

          case "table":
            return (
              <div key={index} className="blog-table-wrap">
                {block.caption && <p className="blog-table-caption">{block.caption}</p>}
                <table className="blog-table">
                  <thead>
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>
                            {cellIsSeverity(cell.trim()) ? (
                              <SeverityBadge severity={cell.trim() as BugSeverity} />
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "metrics":
            return (
              <div key={index} className="blog-metrics">
                {block.items.map((item) => (
                  <div key={item.label} className="blog-metric-card">
                    <div className="blog-metric-value">{item.value}</div>
                    <div className="blog-metric-label">{item.label}</div>
                  </div>
                ))}
              </div>
            );

          case "bugGrid":
            return (
              <div key={index} className="blog-bug-grid">
                {block.items.map((bug) => (
                  <div key={bug.title} className="blog-bug-card">
                    <SeverityBadge severity={bug.severity} />
                    <h4>{bug.title}</h4>
                    <p>{bug.detail}</p>
                    {bug.impact && <p className="blog-bug-impact">Impact: {bug.impact}</p>}
                  </div>
                ))}
              </div>
            );

          case "bugCard":
            return (
              <div key={index} className="blog-ticket">
                <div className="blog-ticket__header">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {block.id && <span className="blog-ticket__id">{block.id}</span>}
                    <SeverityBadge severity={block.severity} />
                  </div>
                  {block.environment && (
                    <span className="blog-ticket__env">{block.environment}</span>
                  )}
                </div>
                <h4 className="blog-ticket__title">{block.title}</h4>
                <div className="blog-ticket__body">
                  {block.steps && block.steps.length > 0 && (
                    <div>
                      <p className="blog-ticket__label">Steps to reproduce</p>
                      <ol className="blog-ticket__steps">
                        {block.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {block.expected && (
                    <div>
                      <p className="blog-ticket__label">Expected</p>
                      <p className="blog-ticket__text">{block.expected}</p>
                    </div>
                  )}
                  {block.actual && (
                    <div>
                      <p className="blog-ticket__label">Actual</p>
                      <p className="blog-ticket__text">{block.actual}</p>
                    </div>
                  )}
                  {block.impact && (
                    <div>
                      <p className="blog-ticket__label">Impact</p>
                      <p className="blog-ticket__text">{block.impact}</p>
                    </div>
                  )}
                  {block.evidence && (
                    <div>
                      <p className="blog-ticket__label">Evidence</p>
                      <p className="blog-ticket__text">{block.evidence}</p>
                    </div>
                  )}
                </div>
              </div>
            );

          case "downloads":
            return (
              <div key={index} className="blog-download-grid">
                {block.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    download
                    className="blog-download-card"
                  >
                    <div className="blog-download-card__icon">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="blog-download-card__label">{item.label}</p>
                      <p className="blog-download-card__desc">{item.description}</p>
                    </div>
                    <Download className="blog-download-card__cta h-4 w-4" />
                  </a>
                ))}
              </div>
            );

          case "links":
            return (
              <div key={index} className="blog-download-grid">
                {block.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="blog-download-card"
                  >
                    <div className="blog-download-card__icon">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="blog-download-card__label">{item.label}</p>
                      <p className="blog-download-card__desc">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
