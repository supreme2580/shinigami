import clsx from "@/utils/lib";
import { Editor } from "@monaco-editor/react";
import { Jura } from "next/font/google";
import { Dispatch, SetStateAction } from "react";

export default function CustomEditor({ value, onChange, className, setMonaco, setEditorTheme, font }:
  { value: string | undefined, onChange: (value: string) => void, className?: string, font?: any,
    setMonaco: Dispatch<SetStateAction<any>>, setEditorTheme: (monaco: any, setMonaco: Dispatch<SetStateAction<any>>) => void 
  }
) {
    return (
        <div className={clsx(className, "w-full border-8 border-[#232523AE] bg-black overflow-y")}>
          <Editor
            beforeMount={(monaco) => setEditorTheme(monaco, setMonaco)}
            theme="darker"
            defaultLanguage="bitcoin-script"
            value={value || ""}
            onChange={(newValue) => onChange(newValue || "")}
            options={{
              fontFamily: `${font.style.fontFamily}, sans-serif`,
              fontSize: 16,
              lineHeight: 24,
              renderLineHighlight: "none",
            }}
          />
        </div>
  );
}