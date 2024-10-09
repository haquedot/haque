"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Image from 'next/image';

interface Post {
    title: string;
    pubDate: string;
    description: string;
    link: string;
    author: string;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const username = 'haquedot';

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(
                `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
            );

            setPosts(response.data.items.map((item: any) => ({
                title: item.title,
                pubDate: item.pubDate,
                description: item.description,
                link: item.link,
                author: item.author,
            })));
        };

        fetchPosts();
    }, []);

    const extractImageFromDescription = (description: string): string | null => {
        const sanitizedDescription = DOMPurify.sanitize(description);
        const doc = new DOMParser().parseFromString(sanitizedDescription, 'text/html');
        const img = doc.querySelector('img');
        return img ? img.src : null;
    };

    return (
        <>
            <div className="mx-auto md:w-10/12 px-4">
                <h1 className="my-10 px-2 py-0.5 text-xs text-start text-[#40ffa3] border border-[#40ffa3] w-min rounded-3xl">Blogs</h1>

                <div className="mx-auto grid md:grid-cols-3 gap-4 h-full">
                    {posts.map((post, index) => {
                        const imageSrc = extractImageFromDescription(post.description);

                        return (
                            <CardContainer
                                key={index}
                                className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto md:w-full h-full rounded-xl p-6 border">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 text-white"
                                    >
                                        {post.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
                                    >
                                        Posted on: {post.pubDate.slice(0, 10)} | @{post.link.slice(8, 14)}
                                    </CardItem>

                                    <CardItem
                                        translateZ="100"
                                        rotateX={20}
                                        rotateZ={-10}
                                        className="w-full mt-4"
                                    >
                                        {imageSrc ? (
                                            <Image
                                                src={imageSrc}
                                                height={600}
                                                width={600}
                                                className="h-60 w object-cover rounded-xl group-hover/card:shadow-xl"
                                                alt={post.title}
                                            />
                                        ) : (
                                            <div>No image available</div>
                                        )}
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-10">
                                        <p
                                            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                                        >
                                            @{username}
                                        </p>
                                        <a
                                            href={post.link}
                                            className="px-4 py-2 rounded-xl bg-black bg-white text-black text-xs font-bold"
                                        >
                                            Read now
                                        </a>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Blog;
