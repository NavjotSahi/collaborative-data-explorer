from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
from fastapi import FastAPI, File, UploadFile

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",  # The default address for React's dev server
    # You will add your deployed frontend URL here later
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/api/upload-csv/")
async def upload_csv(file: UploadFile = File(...)):
    # Read the uploaded file's content
    contents = await file.read()

    # Use pandas to read the CSV data from the byte string
    # We use a StringIO to treat the byte string like a file
    data_stream = io.StringIO(contents.decode('utf-8'))
    df = pd.read_csv(data_stream)

    # Convert the DataFrame to a JSON-friendly format (list of records)
    data = df.to_dict(orient='records')

    # Return the column headers and the data
    return {
        "columns": list(df.columns),
        "rows": data
    }