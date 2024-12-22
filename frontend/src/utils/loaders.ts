import axiosApi from './axiosApi.ts';
import { AxiosError } from 'axios';

export const getPricing = async () => {
  try {
    const response = await axiosApi.get<IPricingPlan>('/plans');
    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log('AxiosError - Status ', e.status);
      console.log('AxiosError - Response ', e.response);
      return;
    }
    console.log('=>(loaders.ts:15) ', e);
  }
};
