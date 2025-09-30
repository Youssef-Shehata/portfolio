"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";
import projectsData from "@/app/data/projects.json";
export default function Home() {
  return (
    <main className=" min-h-screen bg-[#f5f5f5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Avatar className="h-32 w-32 mx-auto mb-4">
            <AvatarImage
              src="https://github.com/Youssef-Shehata.png"
              alt="avatar"
            />
            <AvatarFallback>YS</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {projectsData.info.name}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            {projectsData.info.title}
          </p>
          <div className="flex justify-center space-x-4">
            {projectsData.info.links.Github && (
              <a
                href={projectsData.info.links.Github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {projectsData.info.links.LinkedIn && (
              <a
                href={projectsData.info.links.LinkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}

            {projectsData.info.links.Twitter && (
              <a
                href={projectsData.info.links.Twitter.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>

        <div className="prose max-w-none mb-16">
          <p className="text-gray-900 text-xl px-12 ">
            {projectsData.info.summary.map((s) => {
              return <div>{s}</div>;
            })}
          </p>
        </div>

        {/* Projects */}
        <div key="" className="grid grid-rows  gap-4">
          {projectsData.projects.map((project) => (
            <Card
              key={project.id}
              className="flex-col bg-[#f1f5f9] content-between align-items:space-between h-full hover:shadow-lg transition-shadow  content-between"
            >
              <Link
                key={project.id}
                target="_blank"
                href={project.link || project.github}
              >
                <CardHeader className="gap-2 ">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.summary}</CardDescription>
                </CardHeader>
              </Link>
              <CardContent />

              <CardFooter className="flex justify-between align-items:center ">
                <div className="flex w-max align-items:center justify-start flex-wrap gap-2">
                  {project.live && (
                    <div className="flex align-items:center justify-center bg-[#0088c1] text-white py-1 px-3 rounded border-solid border">
                      Live
                    </div>
                  )}
                  {project.stack.map((a) => (
                    <div
                      key={a}
                      className="flex align-items:center  justify-center bg-[#003134] text-white py-1 px-3 rounded border-solid border"
                    >
                      {a}
                    </div>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-sm px-3 p-1 w-max text-gray-500 hover:text-gray-700 text-right "
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
