import { Dispatch, SetStateAction } from "react";
import CustomEditor from "./custom-editor";
import { NextFont } from "next/dist/compiled/@next/font";
import { EditorContentProps } from "../../types";

export default function EditorContent({
  split,
  scriptSig,
  scriptPubKey,
  setScriptSig,
  setScriptPubKey,
  setEditorTheme,
  setMonacoOne,
  setMonacoTwo,
  font
}: EditorContentProps) {
  return (
    <>
      {!split && (
        <CustomEditor 
          value={scriptPubKey} 
          onChange={setScriptPubKey} 
          className="rounded-b-xl h-[400px] rounded-tr-xl" 
          setMonaco={setMonacoTwo} 
          setEditorTheme={setEditorTheme} 
          font={font} 
        /> 
      )}
      {split && (
        <>
          <CustomEditor 
            value={scriptSig} 
            onChange={setScriptSig} 
            setEditorTheme={setEditorTheme} 
            setMonaco={setMonacoOne} 
            className="border-b-4 h-[160px] rounded-tr-xl" 
            font={font}
          />
          <CustomEditor 
            value={scriptPubKey} 
            onChange={setScriptPubKey} 
            setEditorTheme={setEditorTheme} 
            setMonaco={setMonacoTwo} 
            className="border-t-4 h-[240px] rounded-b-xl" 
            font={font}
          />
        </>
      )}
    </>
  );
}