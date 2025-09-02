import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ file }) => {
      // You can save file info to DB here
      return { uploadedUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

// Required for UploadThing API route
import { createRouteHandler } from "uploadthing/next";
export const { GET, POST } = createRouteHandler({ router: ourFileRouter });
