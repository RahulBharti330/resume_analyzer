from fastapi import FastAPI
from database import engine, Base
from users import router 

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(router, prefix="/users")

@app.get("/")
def read_root():
    return {"meassage":"Benchod chal padha"}

