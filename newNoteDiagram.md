sequenceDiagram
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/no
    Server-->>Browser: HTML document
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/m
    Server-->>Browser: CSS file
    Browser->>+Server: GET  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/m
    Server-->>Browser: JS file
    Browser->>+Server: GET  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/da
    Server-->>Browser: data JSON
    Browser->>+Server: POST form: TEST
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/no
    Server-->>Browser: HTML document
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/m
    Server-->>Browser: CSS file
    Browser->>+Server: GET  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/m
    Server-->>Browser: JS file
    Browser->>+Server: GET  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/da
    Server-->>Browser: data JSON