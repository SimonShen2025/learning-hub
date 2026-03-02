"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight border-b border-violet-100 dark:border-violet-900/50 pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 mb-3 text-lg font-medium">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-7 text-foreground">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc space-y-1.5 text-foreground">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-1.5 text-foreground">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  code: ({ className, children, ...props }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className={`${className} text-sm`} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className="rounded-md bg-violet-100 dark:bg-violet-900/30 px-1.5 py-0.5 text-sm font-mono text-violet-700 dark:text-violet-300">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-violet-100 dark:border-violet-900/50 bg-slate-50 dark:bg-slate-900 p-4 text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-4 border-violet-300 dark:border-violet-700 pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="mb-4 overflow-x-auto rounded-lg border border-violet-100 dark:border-violet-900/50">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-violet-50 dark:bg-violet-900/20">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-medium text-violet-700 dark:text-violet-300">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-violet-100 dark:border-violet-900/50 px-4 py-2">
      {children}
    </td>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-violet-600 dark:text-violet-400 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  hr: () => (
    <hr className="my-6 border-violet-100 dark:border-violet-900/50" />
  ),
};

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
