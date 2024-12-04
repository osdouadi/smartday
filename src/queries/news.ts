"use server";

import { connect } from "@/db/database-config";
import News from "@/models/news.model";
import { NewsData } from "@/types/news-data";

export const getNewsList = async () => {
  try {
    await connect();

    const newsList = await News.find({}).sort({
      createdAt: -1,
    });

    return JSON.parse(JSON.stringify(newsList));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch pricing news list");
  }
}

export const createNews = async (
  newsData: NewsData
) => {
  try {
    await connect();

    const newsDetails = await News.create({
      newsAR: newsData.newsAR,
      newsEN: newsData.newsEN,
     
    });

    return JSON.stringify(newsDetails);
  } catch (error: any) {
    throw new Error(error.message || "Failed to create news");
  }
};

export const deleteNews = async (newsById: string) => {
  try {
    await connect();

    if (!newsById) {
      throw new Error("Id was not provided");
    }
    return await News.findByIdAndDelete(newsById);
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete news");
  }
};

export const deleteNewsList = async () => {
  try {
    await connect();
    
    return await News.deleteMany({});
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete news");
  }
};
