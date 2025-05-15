
import { useEffect, useRef } from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import { useTheme } from "@/components/theme/ThemeProvider";
import { nanoid } from 'nanoid';

// Generate unique IDs for project and user
const PROJECT_ID = nanoid();
const USER_ID = nanoid();

interface GrapesJSStudioProps {
  className?: string;
}

export function GrapesJSStudio({ className }: GrapesJSStudioProps) {
  const { theme } = useTheme();
  const editorRef = useRef<any>(null);
  
  useEffect(() => {
    // Apply theme when it changes
    if (editorRef.current && editorRef.current.editor) {
      const isDark = theme === 'dark';
      const editor = editorRef.current.editor;
      
      // Apply theme-specific styling if needed
      console.log(`Theme changed to: ${theme}`);
    }
  }, [theme]);

  return (
    <div className={`${className || ''} h-full w-full`}>
      <StudioEditor
        ref={editorRef}
        options={{
          licenseKey: 'd62902c06cbe4d248f5fee47d31ab13d78dac6d8378345d2a8fdae081c448715',
          project: {
            type: 'web',
            id: PROJECT_ID
          },
          identity: {
            id: USER_ID
          },
          assets: {
            storageType: 'cloud'
          },
          storage: {
            type: 'cloud',
            autosaveChanges: 100,
            autosaveIntervalMs: 10000
          },
          // Fix: Use the correct config structure for theme
          config: {
            style: {
              theme: theme === 'dark' ? 'dark' : 'light',
            }
          }
        }}
      />
    </div>
  );
}
