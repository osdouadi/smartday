import React from "react";

import BlogHeaderGroup from "@/components/site/blog/blog-header-group";
import BlogList from "@/components/site/blog/blog-list";
import {getPaginatedBlogList } from "@/queries/blog";

const BlogsContainer: React.FC = async () => {
  let blogData = { blogList: [], totalPage: 0 };;
  let isLoading = true;
  let error = null;

  try {
    blogData = await getPaginatedBlogList(1);
  } catch (err: any) {
    error = err.message;
  } finally {
    isLoading = false;
  }

  return (
    <section className="min-h-screen px-3 md:px-5 py-6 md:py-5">
      <div className="text-center mx-auto">
        <BlogHeaderGroup />
      </div>
      <BlogList
        blogs={blogData?.blogList}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
};

export default BlogsContainer;
