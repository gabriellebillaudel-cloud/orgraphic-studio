"use client";

import { useState } from "react";
import { Artwork } from "@/types/artwork";
import { generatePost } from "@/lib/postGenerator";

type ArtworkCardProps = {
  artwork: Artwork;
};

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  const [post, setPost] = useState<ReturnType<typeof generatePost> | null>(null);

  function handleGeneratePost() {
    const generatedPost = generatePost(
      artwork.title,
      artwork.description,
      artwork.technique
    );

    setPost(generatedPost);
  }

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      {artwork.image && (
        <img
          src={artwork.image}
          alt={artwork.title}
          className="h-64 w-full object-cover"
        />
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold">{artwork.title}</h3>
        <p className="text-gray-500 mt-2">{artwork.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">{artwork.price} €</span>
          <span className="text-sm text-green-600">
            {artwork.available ? "Disponible" : "Vendue"}
          </span>
        </div>

        <button
          onClick={handleGeneratePost}
          className="mt-5 w-full bg-black text-white px-4 py-3 rounded-xl"
        >
          ✨ Préparer une publication
        </button>

        {post && (
          <div className="mt-6 space-y-4 border-t pt-4">
            <div>
              <h4 className="font-bold">Instagram</h4>
              <p className="whitespace-pre-line text-sm text-gray-600 mt-2">
                {post.instagram}
              </p>
            </div>

            <div>
              <h4 className="font-bold">Facebook</h4>
              <p className="whitespace-pre-line text-sm text-gray-600 mt-2">
                {post.facebook}
              </p>
            </div>

            <div>
              <h4 className="font-bold">Hashtags</h4>
              <p className="text-sm text-gray-600 mt-2">{post.hashtags}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}