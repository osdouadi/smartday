"use server";

import { connect } from "@/db/database-config";
import Blog from "@/models/blog.model";
import { BlogData } from "@/types/blog-data";

export const getBlogList = async () => {
  try {
    await connect();

    const blogList = await Blog.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(blogList));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch blog list");
  }
};

export const getPaginatedBlogList = async (page: number) => {
  try {
    await connect();

    const pageSize = 6;
    const pageNumber = page || 1;
    const count = await Blog.find({}).countDocuments();
    const blogList = await Blog.find({})
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip((pageNumber - 1) * pageSize);
    const totalPage = Math.ceil(count / pageSize);
    return { blogList: JSON.parse(JSON.stringify(blogList)), totalPage };
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch blog list");
  }
};

export const getBlogById = async (blogId: string) => {
  try {
    await connect();

    if (!blogId) {
      throw new Error("Id was not provided");
    }

    const blogById = await Blog.findById(blogId);
    if (!blogById) {
      throw new Error("Blog not found");
    }
    return JSON.parse(JSON.stringify(blogById));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch get blog details");
  }
};

export const createBlog = async (blogData: BlogData) => {
  try {
    await connect();

    const blogDetails = await Blog.create({
      title: {
        ar: blogData.title.ar,
        en: blogData.title.en,
      },
      shortDescription: {
        ar: blogData.shortDescription.ar,
        en: blogData.shortDescription.en,
      },
      longDescription: {
        ar: blogData.longDescription.ar,
        en: blogData.longDescription.en,
      },
      blogImage: blogData.blogImage,
      SEOSettings: {
        pageTitle: {
          ar: blogData.SEOSettings.pageTitle.ar,
          en: blogData.SEOSettings.pageTitle.en,
        },
        pageDescription: {
          ar: blogData.SEOSettings.pageDescription.ar,
          en: blogData.SEOSettings.pageDescription.en,
        },
      },
    });

    return JSON.stringify(blogDetails);
  } catch (error: any) {
    throw new Error(error.message || "Failed to create blog");
  }
};

export const updateBlog = async (blogId: string, blogData: BlogData) => {
  try {
    await connect();

    if (!blogId) {
      throw new Error("Id was not provided");
    }

    const blogDetails = await Blog.findByIdAndUpdate(blogId, blogData, {
      new: true,
    });

    if (!blogDetails) {
      throw new Error("Blog not found");
    }
    return JSON.stringify(blogDetails);
  } catch (error: any) {
    throw new Error(error.message || "Failed to update blog");
  }
};

export const deleteBlog = async (blogId: string) => {
  try {
    await connect();

    if (!blogId) {
      throw new Error("Id was not provided");
    }
    return await Blog.findByIdAndDelete(blogId);
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete blog");
  }
};

export const deleteBlogList = async () => {
  try {
    await connect();
    
    return await Blog.deleteMany({});
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete blog");
  }
};
