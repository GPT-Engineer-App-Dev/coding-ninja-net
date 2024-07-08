import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleExecute = () => {
    try {
      // For simplicity, we'll use eval for JavaScript execution.
      // In a real-world scenario, consider using a safer execution environment.
      const result = eval(code);
      setOutput(result.toString());
      toast("Code executed successfully!", { description: result.toString() });
    } catch (error) {
      setOutput(error.toString());
      toast("Error executing code", { description: error.toString() });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Code Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <Editor
            height="400px"
            defaultLanguage="javascript"
            defaultValue="// Write your code here"
            onChange={(value) => setCode(value)}
          />
          <Button className="mt-4" onClick={handleExecute}>
            Execute Code
          </Button>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Output</h2>
            <pre>{output}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeEditor;