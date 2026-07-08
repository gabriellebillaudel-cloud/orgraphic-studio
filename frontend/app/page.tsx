"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import WelcomeCard from "@/components/dashboard/WelcomeCard";

import NewArtworkForm from "@/components/artworks/NewArtworkForm";
import ArtworkGallery from "@/components/artworks/ArtworkGallery";

import { Artwork } from "@/types/artwork";

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  function addArtwork(artwork: Artwork) {
    setArtworks((previous) => [artwork, ...previous]);
  }

  return (
    <main className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Abonnés" value="3012" subtitle="Instagram" />
          <StatsCard title="Engagement" value="-- %" subtitle="À connecter" />
          <StatsCard title="Œuvres" value={String(artworks.length)} subtitle="Dans Orgraphic Studio" />
          <StatsCard title="Objectif" value="10K" subtitle="Abonnés" />
        </div>

        <WelcomeCard />

        <div className="mt-8">
          <NewArtworkForm onAddArtwork={addArtwork} />
        </div>

        <ArtworkGallery artworks={artworks} />
      </section>
    </main>
  );
}