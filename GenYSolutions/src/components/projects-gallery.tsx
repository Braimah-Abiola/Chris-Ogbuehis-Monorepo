import { PROJECTS } from "@/constants/images";
import Double from "./double";

const ProjectsGallery = () => {
  return (
    <div className="gallery">
      <Double projects={[PROJECTS[0], PROJECTS[1]]} reversed={false} />
      <Double projects={[PROJECTS[2], PROJECTS[3]]} reversed={true} />
      <Double projects={[PROJECTS[4], PROJECTS[5]]} reversed={false} />
    </div>
  );
};

export default ProjectsGallery;
