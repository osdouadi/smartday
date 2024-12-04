"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  AlignCenter,
  AlignRight,
  AlignLeft,
  Heading1,
  Heading3,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700"
    >
      <div className="flex justify-start items-center gap-6 w-full flex-wrap ">
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBold().run();
            }}
            className={
              editor.isActive("bold")
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Bold className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleItalic().run();
            }}
            className={
              editor.isActive("italic")
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Italic className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleUnderline().run();
            }}
            className={
              editor.isActive("underline")
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Underline className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleStrike().run();
            }}
            className={
              editor.isActive("strike")
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Strikethrough className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            className={
              editor.isActive("heading", { level: 1 })
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Heading1 className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
            className={
              editor.isActive("heading", { level: 2 })
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Heading2 className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
            className={
              editor.isActive("heading", { level: 3 })
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Heading3 className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBulletList().run();
            }}
            className={
              editor.isActive("bulletList")
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleOrderedList().run();
            }}
            className={
              editor.isActive("orderedList")
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <ListOrdered className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "text-primary"
              : "text-black dark:text-white"
          }
        >
          <Quote className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.commands.setTextAlign("left");
            }}
            className={
              editor.isActive({ textAlign: "left" })
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <AlignLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().setTextAlign("center").run();
            }}
            className={
              editor.isActive({ textAlign: "center" })
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <AlignCenter className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().setTextAlign("right").run();
            }}
            className={
              editor.isActive({ textAlign: "right" })
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <AlignRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().redo().run();
            }}
            className={
              editor.isActive("redo")
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Redo className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().undo().run();
            }}
            className={
              editor.isActive("undo")
                ? "text-primary"
                : "text-black dark:text-white"
            }
          >
            <Undo className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
