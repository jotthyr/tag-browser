import { Pagination } from "@mui/material"
import { PaginationWrapper } from "./Pagination.style"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../main"
import { tagsSlice } from "../slices/tags"
import { AppState } from "../slices"

 
const PaginationBar = () => {
  const dispatch: AppDispatch = useDispatch()
  const { maxPage } = useSelector((state: AppState) => state.tags);

  return <PaginationWrapper>
    <Pagination count={maxPage} color="primary" onChange={(_event: React.ChangeEvent<unknown>, value: number)=> dispatch(tagsSlice.actions.getPage(value))} />
  </PaginationWrapper>
}

export default PaginationBar
