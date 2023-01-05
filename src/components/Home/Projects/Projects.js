import React from "react";
import project1 from '../../../assets/images/projects-1.png'
import project2 from '../../../assets/images/projects-2.png'
import project3 from '../../../assets/images/projects-3.png'

const Projects = () => {
  return (
    <div className="my-12" id="projects">
      <h2 className="text-xl text-center text-secondary">Projects</h2>
      <h2 className="text-4xl font-semibold  text-center w-[60%] mx-auto">
        Here Is My Some Projects
      </h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Doctors Portal</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a href="https://doctors-portal-9e982.web.app/" className="btn btn-primary">Live Site</a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">RR Travels</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a href="https://rr-travels-1ddf3.web.app/" className="btn btn-primary">Live Site</a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mybook</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a href="#" className="btn btn-primary">Live Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
