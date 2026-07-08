import ArtworkCard from "./ArtworkCard";
import { Artwork } from "@/types/artwork";

type ArtworkGalleryProps = {
  artworks: Artwork[];
};

export default function ArtworkGallery({ artworks }: ArtworkGalleryProps) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Galerie des œuvres</h2>

      {artworks.length === 0 ? (
        <p className="text-gray-500">Aucune œuvre ajoutée pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
}