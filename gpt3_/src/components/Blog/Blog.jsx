import React from 'react'
import './blog.css'
import BlogContent from '../BlogContent/BlogContent'
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from './imports';


const Blog = () => {
  return (
    <div className="gpt3__blog">

      <div className="gpt3__blog-groupA">
        <BlogContent Image={Blog01} Date="Feb 15 2003" title="GPT-3 and Open AI is the Future. Let us explore how it is?" />
      </div>

      <div className="gpt3__blog-groupB">
        <BlogContent Image={Blog02} Date="Feb 15 2003" title="GPT-3 and Open AI is the Future. Let us explore how it is?" />
        <br />
        <BlogContent Image={Blog03} Date="Feb 15 2003" title="GPT-3 and Open AI is the Future. Let us explore how it is?" />
        {/* <BlogContent Image={Blog04} Date="Feb 15 2003" title="GPT-3 and Open AI is the Future. Let us explore how it is?" />
        <BlogContent Image={Blog05} Date="Feb 15 2003" title="GPT-3 and Open AI is the Future. Let us explore how it is?" /> */}
      </div>
    </div>
  )
}

export default Blog
