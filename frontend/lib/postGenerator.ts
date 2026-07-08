export function generatePost(
  title: string,
  description: string,
  technique: string
) {
  return {
    instagram: `🎨 ${title}

${description}

Création réalisée en ${technique}.

✨ Disponible à la vente.
📩 Contactez-moi en message privé.

#art #streetart #collage #artist #artwork #contemporaryart #orgraphic`,

    facebook: `${title}

${description}

Cette œuvre a été réalisée en ${technique}.

Si elle vous plaît, contactez-moi pour plus d'informations ou pour connaître sa disponibilité.`,

    hashtags:
      "#art #streetart #collage #artist #contemporaryart #mixedmedia #artcollector #orgraphic",
  };
}