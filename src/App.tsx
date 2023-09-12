import { Header } from './components/header'
import { Textarea } from './components/ui/textarea'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

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
            <code className="font-violet-400">{'{transcription}'}</code> within
            your prompt to add content based on the selected video transcription
          </p>
        </div>
        <aside className="w-80"></aside>
      </main>
    </div>
  )
}
