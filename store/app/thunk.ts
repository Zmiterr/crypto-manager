import { createAsyncThunk } from '@reduxjs/toolkit'

import { AppDispatch } from '@/store'
import { APP_PREFIX, AppFetchMethodsEnum } from '@/store/app/types'

export const initAppAsync = createAsyncThunk<void, void, { dispatch: AppDispatch; rejectValue: string }>(
  `${APP_PREFIX}/${AppFetchMethodsEnum.initAppAsync}`,
  async (_) => {
    try {
      // const api = await getApi();
      // return api.data;
    } catch (error) {
      // const errorMessage = (error as ErrorsType).response?.data?.message;
      // return rejectWithValue(errorMessage);
    }
  }
)
