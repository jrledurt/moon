"use client";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing/route";

export default function MyUploader() {
  return (
    <div className="my-8">
      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          alert("Upload complete! " + res?.[0]?.url);
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
