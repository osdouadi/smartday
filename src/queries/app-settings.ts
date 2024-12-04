"use server";

import { connect } from "@/db/database-config";
import GlobalMetadata from "@/models/metadata";
import { MetaData } from "@/types/metadata";

export const getMetadata = async () => {
  try {
    await connect();
    const metadata = await GlobalMetadata.findOne({});
    return JSON.parse(JSON.stringify(metadata));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch metadata");
  }
};

export const updateMetadata = async (metadataData: MetaData) => {
  try {
    await connect();
    const metadata = await GlobalMetadata.findOne({});
    if (!metadata) {
      const metadataDetails = await GlobalMetadata.create(metadataData);

      return JSON.parse(JSON.stringify(metadataDetails));
    }
    const updatedMetadataDetails = await GlobalMetadata.findOneAndUpdate(
      {},
      { $set: metadataData },
      {
        new: true,
      }
    );
    return JSON.parse(JSON.stringify(updatedMetadataDetails));
  } catch (error: any) {
    throw new Error(error.message || "Failed to update metadata");
  }
};
