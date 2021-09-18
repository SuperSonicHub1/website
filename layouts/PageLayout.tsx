import NavBar from "@/components/NavBar";
import React from "react";
const PageLayout: React.FC<{ page: "blog" | "home"; full?: boolean }> = ({
  page,
  full = false,
  children,
}) => {
  return (
    <div className={"w-full bg-white dark:bg-dark-900"}>
      <NavBar page={page} />
      <div
        className={`max-w-3xl lg:max-w-4xl mx-auto px-4 py-12 pt-16 flex flex-col ${
          full ? "min-h-screen justify-center" : "justify-between"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
