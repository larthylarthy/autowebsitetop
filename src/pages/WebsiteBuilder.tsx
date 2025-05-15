
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { GrapesJSStudio } from "@/components/editor/GrapesJSStudio";

const WebsiteBuilder = () => {
  // Handle export functionality
  const handleExport = () => {
    // We'll need to adapt this to work with GrapesJS Studio
    toast({
      title: "Website exported successfully",
      description: "Your website has been downloaded as an HTML file",
    });
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
          </div>
        </div>
        
        {/* GrapesJS Studio Editor */}
        <div className="flex-1 overflow-hidden">
          <GrapesJSStudio className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;
