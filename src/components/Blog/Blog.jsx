/* eslint-disable react/prop-types */
import { FaBookmark } from "react-icons/fa6";


const Blog = ({ blog , hanleAddToBookmark }) => {
    const {title, cover, author, author_img, posted_date , reading_time, hashtags} = blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8 rounded-xl" src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div className="items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={hanleAddToBookmark} className="ml-2 text-2xl text-red-600"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};




export default Blog;