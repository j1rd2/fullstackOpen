sequenceDiagram
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/sp
    Server-->>Browser: HTML document
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/m
    Server-->>Browser: CSS File
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/sp
    Server-->>Browser: JS file 
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/da
    Server-->>Browser: JSON Data
    Browser->>+Server: POST: newNoteSPA
    Server-->>Broser: JSON data
