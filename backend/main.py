from fastapi import FastAPI
from pydantic import BaseModel
from ai import generate_artwork_post

app = FastAPI()


class GeneratePostRequest(BaseModel):
    title: str
    description: str
    technique: str = "Collage"


@app.get("/")
def read_root():
    return {"message": "Bienvenue sur Orgraphic Studio API"}


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.post("/generate-post")
def generate_post(request: GeneratePostRequest):
    try:
        result = generate_artwork_post(
            title=request.title,
            description=request.description,
            technique=request.technique,
        )

        return {"result": result}

    except Exception as error:
        return {"error": str(error)}