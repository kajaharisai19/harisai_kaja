import { MessageCircle, X, Send } from 'lucide-react'
import { useState } from 'react'

export default function ChatbotButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[19rem] origin-bottom-right animate-fade-up overflow-hidden rounded-lg border border-border bg-card/90 shadow-glow-primary backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/15 to-accent/10 px-4 py-3">
            <div>
              <p className="font-headline text-sm font-semibold text-foreground">Ask about my work</p>
              <p className="text-xs text-muted-foreground">Usually replies within a day</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2 px-4 py-4 text-sm">
            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-muted px-3 py-2 text-muted-foreground">
              Hi! 👋 Questions about my experience, projects, or availability? Drop a note and I'll get
              back to you.
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-border px-3 py-3">
            <input
              readOnly
              onClick={() => {
                window.location.href = 'mailto:kaja.harisai19@gmail.com'
              }}
              placeholder="Type a message…"
              className="w-full cursor-pointer rounded-md border border-border bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <a
              href="mailto:kaja.harisai19@gmail.com"
              aria-label="Send email"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
