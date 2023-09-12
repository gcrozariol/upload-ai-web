import { FileVideo, Upload, Wand2 } from 'lucide-react'
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

export function App() {
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
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="AI generated result"
              readOnly
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
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-m aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground transition hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Upload video
            </label>

            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Transcription prompt</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 resize-none leading-relaxed"
                placeholder="Add keywords mentioned in the video separated by commas (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Upload video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">YouTube Title</SelectItem>
                  <SelectItem value="desc">YouTube Description</SelectItem>
                </SelectContent>
              </Select>
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
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Higher values tend to make the result more creative — but with
                possible errors
              </span>
            </div>

            <Separator />

            <Button className="w-full">
              Run
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
