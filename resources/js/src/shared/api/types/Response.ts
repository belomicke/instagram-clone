import { AxiosResponse } from 'axios'

interface ResponseData<T> {
    success: boolean
    data: T
}

interface NoDataResponse {
    success: boolean
}

export type Response<T> = AxiosResponse<ResponseData<T>>
export type ResponseWithoutData = AxiosResponse<NoDataResponse>
