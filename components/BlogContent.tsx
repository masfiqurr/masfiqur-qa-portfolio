import type { BlogBlock } from "@/lib/blog";

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
          default:
            return null;
        }
      })}
    </div>
  );
}
