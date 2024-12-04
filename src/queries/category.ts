"use server";

import { connect } from "@/db/database-config";
import Category from "@/models/category.model";
import { CategoryData } from "@/types/category-data";

export const getCategoryList = async () => {
  try {
    await connect();

    const categoriesList = await Category.find({}).sort({
      createdAt: -1,
    });
    return JSON.parse(JSON.stringify(categoriesList));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch categories list");
  }
};

export const getCategoryById = async (categoryId: string) => {
  try {
    await connect();

    if (!categoryId) {
      throw new Error("Id was not provided");
    }

    const categoryById = await Category.findById(categoryId);

    if (!categoryById) {
      throw new Error("Category not found");
    }

    return JSON.parse(JSON.stringify(categoryById));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch get category details");
  }
};

export const createCategory = async (categoryData: CategoryData) => {
  try {
    await connect();

    const categoryDetails = await Category.create({
      title: {
        ar: categoryData.title.ar,
        en: categoryData.title.en,
      },
      summary: {
        ar: categoryData.summary.ar,
        en: categoryData.summary.en,
      },
      description: {
        ar: categoryData.description.ar,
        en: categoryData.description.en,
      },
      categoryImage: categoryData.categoryImage,
      SEOSettings: {
        pageTitle: {
          ar: categoryData.SEOSettings.pageTitle.ar,
          en: categoryData.SEOSettings.pageTitle.en,
        },
        pageDescription: {
          ar: categoryData.SEOSettings.pageDescription.ar,
          en: categoryData.SEOSettings.pageDescription.en,
        },
      },
    });
    return JSON.parse(JSON.stringify(categoryDetails));
  } catch (error: any) {
    throw new Error(error.message || "Failed to create category");
  }
};

export const updateCategory = async (
  categoryId: string,
  categoryData: CategoryData
) => {
  try {
    await connect();

    if (!categoryId) {
      throw new Error("Id was not provided");
    }

    const categoryDetails = await Category.findByIdAndUpdate(
      categoryId,
      categoryData,
      {
        new: true,
      }
    );

    if (!categoryDetails) {
      throw new Error("Category not found");
    }

    return JSON.parse(JSON.stringify(categoryDetails));
  } catch (error: any) {
    throw new Error(error.message || "Failed to update category");
  }
};

export const deleteCategory = async (categoryId: string) => {
  try {
    await connect();

    const categoryDetails = await Category.findByIdAndDelete(categoryId);
    if (!categoryDetails) {
      throw new Error("Category not found!");
    }

    return JSON.parse(JSON.stringify(categoryDetails));
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete category");
  }
};

export const deleteCategoriesList = async (): Promise<{
  message: string;
}> => {
  await connect();

  try {

    await Category.deleteMany({});

    return { message: "All categories deleted." };
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete categories");
  }
};
