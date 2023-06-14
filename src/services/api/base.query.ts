/* eslint-disable */
export const axiosBaseQuery =
  ({ url, method, instance, headers }: any) => {
    return async ( data?: any ): Promise<any> => {
      try {
        const result = await instance({ url, method, data, headers });

        return { data: result.data };
      } catch (axiosError) {
        console.error(axiosError);
        return axiosError;
      }
    };
  };
