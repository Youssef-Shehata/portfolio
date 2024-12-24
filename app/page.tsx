"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardFooter, CardDescription, CardHeader, CardTitle, CardContent } from '@/app/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Github, Linkedin, Twitter } from 'lucide-react';
import projectsData from '@/app/data/projects.json'
export default function Home() {
    return (
        <main className=" min-h-screen bg-[#f5f5f5] py-12 px-4 sm:px-6 lg:px-8">

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-16">
                    <Avatar className="h-32 w-32 mx-auto mb-4">
                        <AvatarImage src="https://github.com/Youssef-Shehata.png" alt="avatar" />
                        <AvatarFallback>YS</AvatarFallback>
                    </Avatar>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Youssef Shehata</h1>

                    <p className="text-xl text-gray-600 mb-6">
                        Software Engineer
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://github.com/Youssef-Shehata"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/youssef-shehata-shaaban"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>


                        <a href="https://x.com/seijuro_tj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <Twitter className='h-6 w-6' />
                        </a>





                        <a
                            href="https://leetcode.com/youssefshehata58/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                alt="leetcode icon"
                                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                                width={18} height={18}
                            />
                        </a>

                    </div>
                </div>

                <div className="prose max-w-none mb-16">
                    <p className="text-lg px-12 text-gray-600">
                        Hi , im youssef shehata, a computer science grad in love with hard problems and good programming tools,
                        occasionaly creating both. a fan of meta programming and ricing my dev environment.
                        <br />
                        <br />
                        currently learning more about databases and the beauriful engineering the goes behind them.

                        <br />
                        in my free time i like to draw (will be posting some of my drawings soon)
                        <br />
                        <br />
                        Here is some of my recent work :
                    </p>
                </div>

                {/* Projects */}
                <div key="" className="grid grid-rows  gap-4">
                    {projectsData.projects.map((project) => (

                        <Card key={project.id} className="flex-col bg-[#f1f5f9] content-between align-items:space-between h-full hover:shadow-lg transition-shadow  content-between">
                            <Link key={project.id} target="_blank" href={project.link || project.github}>

                                <CardHeader className='gap-2 '>

                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription >
                                        {project.summary}

                                    </CardDescription>
                                </CardHeader>
                            </Link>
                            <CardContent />


                            <CardFooter className='flex justify-between'>
                                <div className='flex flex-row align-center justify-center gap-2'>
                                    {project.live &&
                                        <div className="flex justify-center bg-[#0088c1] text-white p-0.5 px-2.5 rounded border-solid border">
                                            Live

                                        </div>
                                    }
                                    {project.stack.map(a => (
                                        <div key={a} className="flex justify-center bg-[#003134] text-white p-0.5 px-2.5 rounded border-solid border">
                                            {a}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm px-2 p-1 w-fit text-gray-500 hover:text-gray-700 w-full text-right "
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View on GitHub →
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main >
    );
}
