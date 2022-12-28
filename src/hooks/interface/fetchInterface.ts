export interface DataFetch {
    data: DataResponse[] | [];
    loading: boolean;
    error: null | string
}

interface DataResponse {
    _id:         string;
    title:       string;
    description: string;
    done:        boolean;
    createdAt:   Date;
    updatedAt:   Date;
}