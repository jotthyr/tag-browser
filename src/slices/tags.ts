import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../main';

interface InitialState {
  loading: boolean;
  hasErrors: boolean;
  tags: Array<{
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
  }>;
  tagsNumber: number;
  page: number;
  order: string;
  sort: string;
  maxPage: number;
}

export const initialState = {
  loading: false,
  hasErrors: false,
  tags: [],
  tagsNumber: 10,
  page: 1,
  order: "desc",
  sort: "popular",
  maxPage: 10,
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialState as InitialState,
  reducers: {
    getTags: state => {
      state.loading = true
    },
    getTagsSuccess: (state, { payload }) => {
      state.tags = payload
      state.loading = false
      state.hasErrors = false
    },
    getTagsFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
    getTagsNumber: (state, { payload }) => {
      state.tagsNumber = payload
    },
    getPage: (state, { payload }) => {
      state.page = payload
    },
    getOrder: (state, { payload }) => {
      state.order = payload
    },
    getSort: (state, { payload }) => {
      state.sort = payload
    },
    getMaxPage: (state, { payload }) => {
      if(payload === true) {
      state.maxPage = state.maxPage + 1
      }
    },
  },
})

export const { getTags, getTagsSuccess, getTagsFailure, getMaxPage } = tagsSlice.actions
export default tagsSlice.reducer

export function fetchTags(page: number, pageSize: number, order: string, sort: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(getTags())

    try {
      const response = await fetch(`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`)
      const data = await response.json()

      dispatch(getTagsSuccess(data.items))
      dispatch(getMaxPage(data.has_more))
    } catch (error) {
      console.log(error)
      dispatch(getTagsFailure())
    }
  }
}
