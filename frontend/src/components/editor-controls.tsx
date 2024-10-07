import Image from "next/image";
import next from "@/images/next.svg";
import previous from "@/images/previous.svg";
import stop from "@/images/stop.svg";
import { EditorControlsProps } from "../../types";

export default function EditorControls({
  isFetching,
  isDebugging,
  isDebugFetch,
  runError,
  debugError,
  hasFetchedDebugData,
  step,
  debuggingContent,
  onRunScript,
  onDebugScript,
  onPreviousStep,
  onNextStep,
  onStopDebugging
}: EditorControlsProps) {
  return (
    <div className="w-full flex flex-col space-y-3.5 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between mb-10">
      <div className="mt-5 space-y-0 flex flex-row items-center space-x-3.5">
        <button
          className="bg-[#00FF5E] uppercase text-black px-6 py-3 rounded-[3px] opacity-50 shadow-[0px_4px_8px_2px_rgba(0,255,94,0.20)]"
          onClick={onRunScript}
          disabled={isFetching}
        >
          {runError ? runError : isFetching ? "Running..." : "Run Script"}
        </button>
        <button 
          className="bg-[rgba(0,255,94,0.10)] text-[#00FF5E] border border-[#00FF5E] border-opacity-50 px-3 py-3 rounded-[3px] opacity-50 uppercase"
          onClick={onDebugScript}
          disabled={isDebugging}
        >
          {debugError ? debugError : isDebugFetch ? "Loading..." : isDebugging ? "Debugging..." : "Debug Script"}
        </button>
        {(isDebugging || hasFetchedDebugData) && !isFetching && (
          <div className="flex flex-row space-x-3.5">
            <button 
              className={`block ${step <= 0 ? "opacity-50" : ""}`} 
              disabled={step <= 0} 
              onClick={onPreviousStep}
            >
              <Image src={previous} alt="Previous" unoptimized />
            </button>
            <button 
              className={`block ${step >= debuggingContent.length - 1 ? "opacity-50" : ""}`} 
              disabled={step >= debuggingContent.length - 1} 
              onClick={onNextStep}
            >
              <Image src={next} alt="Next" unoptimized />
            </button>
            <button 
              className="block" 
              onClick={onStopDebugging}
            >
              <Image src={stop} alt="Stop" unoptimized />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}