import { ReactNode } from "react";
import PageBase from "./PageBase";
import { LinkDef } from "./types";

const GymToolsBase = ({
  title,
  path,
  children,
}: {
  title?: string;
  path: string;
  children?: ReactNode;
}) => {
  const links: LinkDef[] = [
    {
      title: "Home",
      href: "/gym-tools",
      isCurrent: path === "/gym-tools",
    },
    {
      title: "Cut weight calc",
      href: "/gym-tools/weight-cut",
      isCurrent: path === "/weight-cut",
    },
  ];

  return (
    <PageBase title={title || "gym-tools"} links={links}>
      {children}
    </PageBase>
  );
};

export default GymToolsBase;
