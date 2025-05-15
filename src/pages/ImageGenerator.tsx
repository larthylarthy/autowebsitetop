import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Loader2, ImageIcon, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Debug environment variables
    console.log('Environment variables:', {
      token: import.meta.env.VITE_CLOUDFLARE_API_TOKEN ? 'Present' : 'Missing',
      accountId: import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID ? 'Present' : 'Missing'
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setGeneratedImageUrl(null);
      
      // Debug request
      console.log('Making request to worker with:', {
        prompt,
        accountId: import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID
      });
      
      // Using the provided Cloudflare worker endpoint
      const response = await fetch("https://autowebsite.larthycape.workers.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          account_id: import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID,
          token: import.meta.env.VITE_CLOUDFLARE_API_TOKEN
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Worker response error:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImageUrl(imageUrl);
      
      toast({
        title: "Image generated successfully",
        description: "Your image has been created based on your prompt",
      });
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Error generating image",
        description: error instanceof Error ? error.message : "There was a problem generating the image",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImageUrl) return;
    
    const link = document.createElement("a");
    link.href = generatedImageUrl;
    link.download = `generated-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Image downloaded",
      description: "Your generated image has been downloaded",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-autowebsite-light-purple dark:bg-gray-800 px-6 py-3 border-b">
        <h1 className="text-xl font-bold text-autowebsite-text-primary dark:text-white">Image Generator</h1>
        <p className="text-autowebsite-text-secondary dark:text-gray-300">
          Create unique images for your website using AI
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="prompt" className="block text-sm font-medium mb-2 dark:text-white">
                    Describe the image you want to generate
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., 'A sunset over a mountain landscape in watercolor style'"
                      className="flex-1 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      disabled={loading}
                    />
                    <Button 
                      type="submit" 
                      className="bg-autowebsite-accent hover:bg-autowebsite-accent-hover dark:bg-autowebsite-accent dark:hover:bg-autowebsite-accent-hover" 
                      disabled={!prompt.trim() || loading}
                    >
                      {loading ? 
                        <Loader2 className="h-5 w-5 animate-spin" /> : 
                        <ArrowRight className="h-5 w-5" />
                      }
                    </Button>
                  </div>
                  <p className="text-xs text-autowebsite-text-secondary mt-2 dark:text-gray-400">
                    Be specific about style, colors, and content for best results
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {loading ? (
            <div className="text-center py-12">
              <Loader2 className="h-12 w-12 animate-spin mx-auto text-autowebsite-accent" />
              <p className="mt-4 text-autowebsite-text-secondary dark:text-gray-400">Generating your image...</p>
            </div>
          ) : generatedImageUrl ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold dark:text-white">Generated Image</h2>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  ref={imageRef}
                  src={generatedImageUrl}
                  alt="Generated image"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 border-t dark:bg-gray-800 dark:border-gray-700">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full dark:text-white dark:hover:bg-gray-700"
                    onClick={handleDownload}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Image
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed rounded-lg dark:border-gray-700">
              <ImageIcon className="h-12 w-12 mx-auto text-autowebsite-text-secondary dark:text-gray-400" />
              <h3 className="text-xl font-medium mt-4 dark:text-white">No images generated yet</h3>
              <p className="text-autowebsite-text-secondary mt-2 dark:text-gray-400">
                Enter a prompt above to create your first image
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
