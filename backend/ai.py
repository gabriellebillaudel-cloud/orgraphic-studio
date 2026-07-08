import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def generate_artwork_post(title: str, description: str, technique: str = "Collage"):
    prompt = f"""
Tu es l'assistant marketing d'Orgraphic, artiste visuel spécialisé en street art et collage.

À partir de cette œuvre :

Titre : {title}
Description : {description}
Technique : {technique}

Génère une réponse structurée avec :
1. Un titre alternatif accrocheur
2. Une légende Instagram
3. Une version Facebook
4. 15 hashtags pertinents
5. Un appel à l'action commercial discret
"""

    response = client.responses.create(
        model="gpt-4.1-mini",
        input=prompt,
    )

    return response.output_text