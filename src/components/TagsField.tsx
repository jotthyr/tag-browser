import { Chip } from "@mui/material"
import { OuterTagsWrapper, TagsWrapper } from "./TagsField.style"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { fetchTags } from "../slices/tags";
import { AppDispatch } from "../main";
import { AppState } from "../slices";
import LoadMessage from "./loadStateComponents/LoadMessage";
import ErrorMessage from "./loadStateComponents/ErrorMessage";


interface TagData {
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
}

 
const TagsField = () => {
  const dispatch: AppDispatch = useDispatch()
  const { tags, loading, hasErrors, tagsNumber, page, order, sort } = useSelector((state: AppState) => state.tags);

  useEffect(() => {
    console.log(page, tagsNumber, order, sort)
    dispatch(fetchTags(page, tagsNumber, order, sort))
  }, [dispatch, order, page, sort, tagsNumber])

  const renderTags = () => {
    if (loading) return <LoadMessage/>

    if (hasErrors) return <ErrorMessage/>

    return tags.map((tag: TagData, index: number) => <Chip key={index} label={`${tag.name} (${tag.count})`} sx={{ my: "8px", mr: "8px"}} />)
  }

  return <OuterTagsWrapper><TagsWrapper>
    {renderTags()}
  </TagsWrapper>
  </OuterTagsWrapper>
}

export default TagsField
