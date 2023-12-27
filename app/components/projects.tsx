import React from 'react'
import { projectsData } from '@/lib/data';
import Project from './project';

const Projects = () => {
  return (
    <div>
        <section className="mb-20 max-w-[65rem] max-h-[180rem] p-4 text-center leading-8 scroll-mt-24" id='projects'>
            <h1 className="text-3xl mb-4 font-bold">My Projects</h1>
            <div>
            {projectsData.map((project, index) => (
                      <React.Fragment key={index}>
                          <Project {...project} />
                      </React.Fragment>
                  )
              )}

            </div>

        </section>
    </div>
  )
}

export default Projects;
