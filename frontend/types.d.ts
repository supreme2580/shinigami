export interface StackItem {
    value: string;
}
  
export interface StackVisualizerProps {
    stackContent: StackItem[];
}

export interface EditorContentProps {
    split: boolean;
    scriptSig: string;
    scriptPubKey: string;
    setScriptSig: React.Dispatch<React.SetStateAction<string>>;
    setScriptPubKey: React.Dispatch<React.SetStateAction<string>>;
    setEditorTheme: (monaco: any, setMonaco: React.Dispatch<React.SetStateAction<any>>) => void;
    setMonacoOne: React.Dispatch<React.SetStateAction<any>>;
    setMonacoTwo: React.Dispatch<React.SetStateAction<any>>;
    font: any;
  }
  
  export interface EditorHeaderProps {
    split: boolean;
    onSplitToggle: () => void;
  }
  
  export interface EditorControlsProps {
    isFetching: boolean;
    isDebugging: boolean;
    isDebugFetch: boolean;
    runError: string | null;
    debugError: string | null;
    hasFetchedDebugData: boolean;
    step: number;
    debuggingContent: StackItem[][];
    onRunScript: () => void;
    onDebugScript: () => void;
    onPreviousStep: () => void;
    onNextStep: () => void;
    onStopDebugging: () => void;
  }