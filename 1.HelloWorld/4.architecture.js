/*

1. Client send a request
2. Request goes into "Event Queue"
3. "Event Loop" will check for the request
    if(non-blocking operation){         // Asynchronous req
        process the request
        send response
    }
    else{                              // blocking req  (sync req)
        request goes to "Thread Pool"
        "Workers" will process the request
        send response
    }

*/