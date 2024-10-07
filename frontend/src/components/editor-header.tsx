import Image from "next/image";
import splitImage from "@/images/split.svg";
import unsplitImage from "@/images/unsplit.svg";
import { EditorHeaderProps } from "../../types";

export default function EditorHeader({ split, onSplitToggle }: EditorHeaderProps) {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className="w-40 h-10 bg-[#232523AE] clip-trapezium-right flex flex-col items-start justify-center pl-2.5 pt-1.5 rounded-t-xl">
        <p className="text-[#85FFB2] text-lg">Script Editor</p>
      </div>
      <button
        className="flex flex-row items-center space-x-1"
        onClick={onSplitToggle}
      >
        <Image src={split ? unsplitImage : splitImage} alt="" unoptimized />
        <p className="text-white uppercase">
          {split ? "Unsplit" : "Split"} Editor
        </p>
      </button>
    </div>
  );
}