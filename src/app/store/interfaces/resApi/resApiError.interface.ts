
export interface resApiError{
    "errors": [
        {
            "value" : string,
            "msg"   : string,
            "param" : string,
            "location": string
        }
    ]
}