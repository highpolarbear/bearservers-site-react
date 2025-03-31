import { ReactNode } from "react";
import { LinkDef } from "./types";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface PageBaseProps {
  title: string;
  links: LinkDef[];
  theme?: string;
  fluid?: boolean;
  children?: ReactNode;
}

const PageBase = ({
  title,
  links,
  theme,
  fluid = false,
  children,
}: PageBaseProps) => {
  const fluidCssClass = fluid ? "-fluid" : "";
  const templateTheme = theme || "dark";
  const templateTitle = title || "BearServers";

  document.body.setAttribute("data-bs-theme", templateTheme);

  return (
    <div data-bs-theme={templateTheme}>
      <div className="bg-light-subtle text-body">
        {/* Nav */}
        <NavBar title={templateTitle} links={links} />

        {/* Main content */}
        <div className={`container${fluidCssClass} mt-5`}>{children}</div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default PageBase;
