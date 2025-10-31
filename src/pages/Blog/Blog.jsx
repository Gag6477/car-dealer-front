import React from 'react'
import s from './Blog.module.sass'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Container from '../../components/Container/Container';
import BlogCard from '../../components/BlogCard/BlogCard';
import Title from '../../components/Title/Title';
import More from '../../components/More/More';



const Blog = () => {
    return (
        <div className={s.blog}>
            <Container>
                <BreadCrumbs />
                <div className={s.wrap}>
                    <Title text="Blog" level={2} />
                    <div className={s.blogCard}>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </Container>
        </div>
    );
};


export default Blog