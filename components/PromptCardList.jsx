
import PromptCard from "@components/PromptCard"
const PromptCardList = ({data}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt,index)=> <PromptCard key = {prompt._id} {...prompt} />)}
    </div>
  )
}

export default PromptCardList
