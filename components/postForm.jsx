import React from 'react'
import Link from "next/link";

const PostForm = ({prompt, setPrompt, type, handelSubmit, submitting}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left blue_gradient'>{type} Post</h1>
        <p className='desc text-left max-w-md'>
            {type} and share Ai powered prompts with the world and let your imagination run-wild.
        </p>
        <form onSubmit={handelSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
                <textarea value={prompt.title} onChange={(e)=>{setPrompt({...prompt, title:e.target.value})}} name="prompt" className='form_textarea' required placeholder='Write your prompt here...'/>
            </label>
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>Tag <span className='font-normal'>(#product, #idea, #software)</span></span>
                <input value={prompt.tag} onChange = {(e) => {setPrompt({...prompt, tag:e.target.value})}}className='form_input' required placeholder='#tag'/>
            </label>
            <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href="#" className = "text-gray-500 text-sm">Cancel</Link>
                <button type="submit" className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white' disabled = {submitting} >{submitting ? `${type}...` : type }</button>
            </div>
        </form>
    </section>
  )
}

export default PostForm





