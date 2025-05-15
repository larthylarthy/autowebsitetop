import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import { useTheme } from "@/components/theme/ThemeProvider";
import { nanoid } from 'nanoid';

// Generate unique IDs for project and user
const PROJECT_ID = nanoid();
const USER_ID = nanoid();

// Helper functions for local storage
const saveToLocalStorage = async (projectId: string, project: any) => {
  localStorage.setItem(projectId, JSON.stringify(project));
};

const loadFromLocalStorage = async (projectId: string) => {
  const projectString = localStorage.getItem(projectId);
  return projectString ? JSON.parse(projectString) : null;
};

interface GrapesJSStudioProps {
  className?: string;
}

export const GrapesJSStudio = forwardRef(function GrapesJSStudio({ className }: GrapesJSStudioProps, ref) {
  const { theme } = useTheme();
  const editorRef = useRef<any>(null);
  
  // Expose getHtmlCss method to parent
  useImperativeHandle(ref, () => ({
    getHtmlCss: () => {
      const editor = editorRef.current?.editor;
      if (editor) {
        return {
          html: editor.getHtml(),
          css: editor.getCss(),
        };
      }
      return { html: '', css: '' };
    }
  }));

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
            id: PROJECT_ID,
            default: {
              pages: [
                { name: 'Home', component: '<h1>Welcome to your new website!</h1>' },
              ]
            }
          },
          identity: {
            id: USER_ID
          },
          storage: {
            type: 'self',
            autosaveChanges: 5, // save after every 5 changes
            onSave: async ({ project }) => {
              await saveToLocalStorage(PROJECT_ID, project);
              console.log('Project saved', { project });
            },
            onLoad: async () => {
              const project = await loadFromLocalStorage(PROJECT_ID);
              console.log('Project loaded', { project });
              return {
                project: project || {
                  pages: [
                    { name: 'Home', component: '<h1>Welcome to your new website!</h1>' },
                  ]
                }
              };
            },
          },
          config: {
            style: {
              theme: theme === 'dark' ? 'dark' : 'light',
            }
          }
        }}
      />
    </div>
  );
});
