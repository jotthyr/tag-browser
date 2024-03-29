import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { ConfigurationWrapper, TagsNumberInput, TagsNumberLabel, TagsNumberWrapper } from "./ConfigurationBar.style"
import { AppDispatch } from "../main"
import { useDispatch } from "react-redux"
import { tagsSlice } from "../slices/tags"
import _ from "lodash";
import { useEffect, useState } from "react"

 
const ConfigurationBar = () => {
  const dispatch: AppDispatch = useDispatch()

  const pageSize = _.debounce((value) => dispatch(tagsSlice.actions.getTagsNumber(value)), 1000);

  const [inputValue, setInputValue] = useState("10");

  useEffect(() => {
    pageSize(inputValue);

    return () => pageSize.cancel();
  }, [inputValue]);

  return <ConfigurationWrapper>  
    <TagsNumberWrapper>
      <TagsNumberLabel>Number of tags</TagsNumberLabel>
      <TagsNumberInput type="number" defaultValue={10} onChange={(event)=>{setInputValue(event.currentTarget.value)}} />
    </TagsNumberWrapper>
    <FormControl>
    <FormLabel id="radio-buttons-group-type-label" sx={{ fontSize: "12px", color: "gray", mx: "32px"}}>Type</FormLabel>
      <RadioGroup
        sx={{ mx: "32px"}}
        defaultValue="popular"
        name="radio-buttons-group-type"
        onChange={(event) => dispatch(tagsSlice.actions.getSort(event.currentTarget.value))}
      >
        <FormControlLabel value="popular" control={<Radio />} label="Count" />
        <FormControlLabel value="name" control={<Radio />} label="Name" />
      </RadioGroup>
    </FormControl>
    <FormControl>
    <FormLabel id="radio-buttons-group-sort-label" sx={{ fontSize: "12px", color: "gray", mx: "32px"}}>Sort</FormLabel>
      <RadioGroup
        sx={{ mx: "32px"}}
        defaultValue="desc"
        name="radio-buttons-group-sort"
        onChange={(event) => dispatch(tagsSlice.actions.getOrder(event.currentTarget.value))}
      >
        <FormControlLabel value="desc" control={<Radio />} label="Descending" />
        <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
      </RadioGroup>
    </FormControl>
  </ConfigurationWrapper>
}

export default ConfigurationBar
