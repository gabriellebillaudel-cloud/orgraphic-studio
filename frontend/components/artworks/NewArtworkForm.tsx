"use client";

import { useState } from "react";
import { Artwork } from "@/types/artwork";

type NewArtworkFormProps = {
  onAddArtwork: (artwork: Artwork) => void;
};

export default function NewArtworkForm({ onAddArtwork }: NewArtworkFormProps) {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newArtwork: Artwork = {
      id: crypto.randomUUID(),
      title,
      description,
      image: imagePreview,
      price: Number(price),
      technique: "Collage",
      support: "Papier",
      width: 0,
      height: 0,
      collection: "Orgraphic",
      createdAt: new Date().toISOString(),
      publishedInstagram: false,
      publishedFacebook: false,
      available: true,
    };

    onAddArtwork(newArtwork);

    setTitle("");
    setDescription("");
    setPrice("");
    setImagePreview("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-8">
      <h2 className="text-2xl font-bold mb-6">Nouvelle œuvre</h2>

      <div className="space-y-5">
        <div>
          <label className="block font-medium mb-2">Photo de l'œuvre</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Aperçu de l'œuvre"
              className="mt-4 max-h-72 rounded-xl border object-cover"
            />
          )}
        </div>

        <div>
          <label className="block font-medium mb-2">Titre</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full border rounded-xl p-3"
            placeholder="Ex : Le messager sauvage"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full border rounded-xl p-3 min-h-28"
            placeholder="Inspiration, histoire, technique..."
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Prix</label>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="w-full border rounded-xl p-3"
            placeholder="Ex : 250"
            type="number"
            required
          />
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Enregistrer l'œuvre
        </button>
      </div>
    </form>
  );
}