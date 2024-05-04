
import PromptCard from "@components/PromptCard"
const PromptCardList = ({data, handelTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt,index)=> <PromptCard key = {prompt._id} {...prompt} handelTagClick = {handelTagClick} />)}
    </div>
  )
}

export default PromptCardList
