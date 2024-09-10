// Components
import TavernDices from "../public/Components/taverndices";
import ProjectsBanner from "../public/Components/projectsbanner";
import Gallery from "../public/Components/projectsgallery";
import Email from "../public/Components/email";

// Page
function Projects() {
  return (
    <>
      <ProjectsBanner />
      <TavernDices />
      <Gallery />
      <Email />
    </>
  );
}
export default Projects;
