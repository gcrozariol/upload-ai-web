import { Wand2 } from 'lucide-react'
import { Header } from './components/header'
import { Textarea } from './components/ui/textarea'
import { Separator } from './components/ui/separator'
import { Label } from './components/ui/label'
import { Button } from './components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select'
import { Slider } from './components/ui/slider'
import { VideoInputForm } from './components/video-input-form'
import { PromptSelector } from './components/prompt-selector'
import { useState } from 'react'
import { useCompletion } from 'ai/react'

export function App() {
  const [temperature, setTemperature] = useState(0.5)
  const [videoId, setVideoId] = useState<string | null>(null)

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    api: 'http://localhost:3333/ai/complete',
    body: {
      videoId,
      temperature,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Text Areas */}
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Add AI prompt"
              value={input}
              onChange={handleInputChange}
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="AI generated result"
              readOnly
              value={completion}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Tip: you can use the variable{' '}
            <code className="text-violet-400">{'{transcription}'}</code> within
            your prompt to add content based on the selected video transcription
          </p>
        </div>

        {/* Right Sidebar */}
        <aside className="w-80 space-y-6">
          <VideoInputForm onVideoUploded={setVideoId} />

          <Separator />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <PromptSelector onPromptSelected={setInput} />
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Soon, you will be able to customize this option
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
                value={[temperature]}
                onValueChange={(value) => setTemperature(value[0])}
              />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Higher values tend to make the result more creative — but with
                possible errors
              </span>
            </div>

            <Separator />

            <Button disabled={isLoading === true} className="w-full">
              {isLoading ? (
                <>Generating...</>
              ) : (
                <>
                  Run
                  <Wand2 className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
