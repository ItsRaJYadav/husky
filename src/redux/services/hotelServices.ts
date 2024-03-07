import axios, { AxiosError } from 'axios';

import { Hotel } from '@/types/hotelTypes';

const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL

export const getAllHotelsDetail = async (): Promise<Hotel[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/hotels/search-all-hotels`);
        return response.data as Hotel[];
    } catch (error: unknown) {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 404) {
            throw new Error('Hotel not found');
        }

        throw new Error('Error fetching data');
    }
};
