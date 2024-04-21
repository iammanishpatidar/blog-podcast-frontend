import Footer from 'components/Footer';
import React from 'react'
import { Link } from 'react-router-dom';

const posts = [
    {
        title: 'The Art of Minimalism',
        excerpt: 'Discover the beauty and simplicity of minimalism in design and lifestyle.',
        date: 'April 1, 2024',
        author: 'John Doe',
        category: 'Design',
    },
    {
        title: 'Healthy Habits for a Happy Life',
        excerpt: 'Explore simple yet effective habits to improve your physical and mental well-being.',
        date: 'March 28, 2024',
        author: 'Jane Smith',
        category: 'Wellness',
    },
    {
        title: 'Healthy Habits for a Happy Life',
        excerpt: 'Explore simple yet effective habits to improve your physical and mental well-being.',
        date: 'March 28, 2024',
        author: 'Jane Smith',
        category: 'Wellness',
    },
    {
        title: 'Healthy Habits for a Happy Life',
        excerpt: 'Explore simple yet effective habits to improve your physical and mental well-being.',
        date: 'March 28, 2024',
        author: 'Jane Smith',
        category: 'Wellness',
    },
    {
        title: 'Healthy Habits for a Happy Life',
        excerpt: 'Explore simple yet effective habits to improve your physical and mental well-being.',
        date: 'March 28, 2024',
        author: 'Jane Smith',
        category: 'Wellness',
    },
    {
        title: 'Healthy Habits for a Happy Life',
        excerpt: 'Explore simple yet effective habits to improve your physical and mental well-being.',
        date: 'March 28, 2024',
        author: 'Jane Smith',
        category: 'Wellness',
    },
    {
        title: 'Healthy Habits for a Happy Life',
        excerpt: 'Explore simple yet effective habits to improve your physical and mental well-being.',
        date: 'March 28, 2024',
        author: 'Jane Smith',
        category: 'Wellness',
    },
];

const BlogList = () => {
    return (
        <div>
            {posts.map((post, index) => (
                <Link to={'/blogdetails'}>
                    <div key={index} className="w-[75vw] m-auto bg-white rounded-lg shadow-lg p-6 mb-4">
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-gray-500 text-sm">
                            <span className="mr-4">{post.date}</span>
                            <span className="mr-4">By {post.author}</span>
                            <span>{post.category}</span>
                        </div>
                    </div></Link>
            ))}
            <Footer />
        </div>

    )
}

export default BlogList