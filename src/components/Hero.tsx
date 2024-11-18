import React, { useState } from "react";
import { Tools } from "../utils/constants.tsx";
import { Tool } from "../types/Tool.type";
import { ToolCard } from "./ToolCard";

export const Hero = () => {
  const [allTools, _setAllTools] = useState<ReadonlyArray<Tool>>(Tools);

  return (
    <div>
      <div className="bg-blue-600 text-white text-bold p-20 flex items-center justify-center text-4xl	">Simple Tools for Everyday tasks</div>
      <div className="p-20">
        {allTools.map((each) => {
          return (
            <React.Fragment key={each.link}>
              <ToolCard {...each} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
