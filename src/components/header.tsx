import { Github } from 'lucide-react'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

export function Header() {
  function handleOnClickGitHub() {
    window.open('https://github.com/gcrozariol/upload-ai-web', '_blank')
  }

  return (
    <div className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload.ai</h1>

      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={handleOnClickGitHub}>
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>

        <ModeToggle />
      </div>
    </div>
  )
}
