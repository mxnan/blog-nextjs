import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.min.css";
import { PiTerminalThin } from "react-icons/pi";
import CopyButton from "./copy-button";

export default function MarkdownPreview({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight]}
      components={{
        //custom h1
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl uppercase font-bold" {...props} />
        ),
        //custom code
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          if (match?.length) {
            let Icon = PiTerminalThin;
            const id = (Math.floor(Math.random() * 100) + 1).toString();
            return (
              <div
                className="bg-zinc-100 dark:bg-zinc-700
               border-[1px] border-stone-300 dark:border-stone-600 rounded-lg"
              >
                <div className="px-4 py-3 border-b flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6" />
                    <span>
                      {
                        //@ts-ignore
                        node?.data?.meta
                      }
                    </span>
                  </div>
                  <CopyButton id={id} />
                </div>
                <div className="overflow-x-auto w-full p-4">
                  <code className="text-sm" id={id}>
                    {children}
                  </code>
                </div>
              </div>
            );
          } else {
            return (
              <code className="text-lightmode dark:text-darkmode" {...props}>
                ```{"add language here"}```
              </code>
            );
          }
        },
        // more custom components
      }}
    >
      {content}
    </Markdown>
  );
}
