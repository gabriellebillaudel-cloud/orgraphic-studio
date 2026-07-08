import { Artwork } from "@/types/artwork";

type ArtworkCardProps = {
  artwork: Artwork;
};

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
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
      </div>
    </div>
  );
}