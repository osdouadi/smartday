"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";

const Tiptap = ({ onChange, content }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "right",
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],

    editorProps: {
      attributes: {
        class:
          "text-white max-w-none [&_ol]:list-decimal [&_ul]:list-disc px-4 py-3 border-b border-r border-l border-gray-700 text-gray-400 w-full gap-3 dark:ring-offset-background",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;
