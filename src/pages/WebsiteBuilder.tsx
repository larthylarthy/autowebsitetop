import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, Code } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { GrapesJSStudio } from "@/components/editor/GrapesJSStudio";
import JSZip from "jszip";

const WebsiteBuilder = () => {
  const editorRef = useRef<any>(null);
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState({ html: '', css: '' });

  // Handle export functionality
  const handleExport = async () => {
    if (!editorRef.current) return;
    const { html, css } = editorRef.current.getHtmlCss();
    const zip = new JSZip();
    zip.file("index.html", html);
    zip.file("styles.css", css);
    const blob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "website.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Website exported successfully",
      description: "Your website has been downloaded as a zip file",
    });
  };

  const handleViewCode = () => {
    if (!editorRef.current) return;
    setCode(editorRef.current.getHtmlCss());
    setShowCode(true);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="bg-autowebsite-light-purple dark:bg-gray-800 px-6 py-3 border-b">
        <h1 className="text-xl font-bold text-autowebsite-text-primary dark:text-white">Website Builder</h1>
        <p className="text-autowebsite-text-secondary dark:text-gray-300">
          Create your website using our drag and drop editor
        </p>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Toolbar */}
        <div className="bg-white dark:bg-gray-900 border-b p-2 flex items-center justify-between flex-wrap gap-2">
          {/* Left side */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
          
          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={handleExport}
              className="bg-autowebsite-accent hover:bg-autowebsite-accent-hover flex items-center gap-1"
            >
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewCode}
              className="flex items-center gap-1"
            >
              <Code className="h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
        
        {/* Editor */}
        <div className="flex-1 overflow-hidden">
          <GrapesJSStudio ref={editorRef} className="h-full" />
        </div>
      </div>

      {/* Code Modal */}
      {showCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setShowCode(false)}
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-4">HTML</h2>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mb-4 overflow-x-auto text-xs max-h-40">{code.html}</pre>
            <h2 className="text-lg font-bold mb-4">CSS</h2>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-xs max-h-40">{code.css}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteBuilder;
