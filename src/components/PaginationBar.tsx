import { Pagination } from "@mui/material"
import { PaginationWrapper } from "./Pagination.style"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../main"
import { tagsSlice } from "../slices/tags"
import { AppState } from "../slices"
import PropTypes from "prop-types";

 
const PaginationBar = ({size = "medium", shape = "circular"}) => {
  const dispatch: AppDispatch = useDispatch()
  const { maxPage } = useSelector((state: AppState) => state.tags);

  return <PaginationWrapper>
    <Pagination size={size} shape={shape} count={maxPage} color="primary" onChange={(_event: React.ChangeEvent<unknown>, value: number)=> dispatch(tagsSlice.actions.getPage(value))} />
  </PaginationWrapper>
}

PaginationBar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["circular", "rounded"])
}

export default PaginationBar
