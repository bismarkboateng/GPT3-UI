import React from 'react';
// import './blogcontent.css'


const BlogContent = ( { Image, Date, title }) => {
    return (
        <div className="gpt3__blogcontent-container">

            <div className="gpt3__blogcontent-img">
                <img src={ Image } alt="image" />
            </div>

            <div className="gpt3__blogcontent-content">
                <p className="gpt3__blogcontent-date">
                    { Date }
                </p>

                <h1 className="gpt3__blogcontent-title">
                    { title }
                </h1>

                <p>Read Full Article </p>
            </div>
        </div>
    );
}


export default BlogContent;