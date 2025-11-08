import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RealisticSeaCreature } from './RealisticSeaCreature';

type ChatMessage = {
  id: string;
  from: 'user' | 'bot' | 'system';
  text: string;
  ts: number;
};

export default function ChatbotJellyfish() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    { id: String(Date.now()), from: 'bot', text: "Hi — I'm Jellybot! Click to start chatting.", ts: Date.now() },
  ]);
  const [value, setValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Load persisted messages (simple memory) on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('jellybot_history');
      if (raw) {
        const parsed: ChatMessage[] = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) {
          setMessages(parsed);
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Persist messages
  useEffect(() => {
    try {
      localStorage.setItem('jellybot_history', JSON.stringify(messages.slice(-50)));
    } catch (e) {
      // ignore
    }
  }, [messages]);

  // Auto-scroll to newest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug logs to trace open/mounted state
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Jellybot mounted=', mounted);
  }, [mounted]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Jellybot open=', open);
  }, [open]);

  // Close when clicking outside the chat or pressing Escape
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const tgt = e.target as Node | null;
      if (!tgt) return;
      if (chatRef.current && chatRef.current.contains(tgt)) return; // inside chat
      if (triggerRef.current && triggerRef.current.contains(tgt)) return; // clicked trigger
      setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  function genId() {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  }

  // Smarter response engine (local keyword matching + small memory)
  function getBotResponse(input: string, history: ChatMessage[]): string {
    const text = input.toLowerCase();

    const defaultResponses = [
      "Nice! Tell me more about what you'd like to see.",
      "I can point you to Projects, Skills, or Contact — what would you like?",
      "I'm a jellyfish bot — I can show Projects, Skills, or say hello!",
    ];

    // greetings
    if (/\b(hello|hi|hey|yo|greetings)\b/.test(text)) {
      return "Hello! 👋 I'm Jellybot. Ask me about Projects, Skills, or Contact.";
    }

    // projects
    if (/\b(project|projects|portfolio|work)\b/.test(text)) {
      return "Check out the Projects section — click the purple jellyfish in the tank or visit the Projects page.";
    }

    // skills
    if (/\b(skill|skills|stack|technolog|tech)\b/.test(text)) {
      return "I have skills in React, TypeScript, animations, and more. Try asking for a specific technology like 'React' or 'TypeScript'.";
    }

    // contact / hire
    if (/\b(contact|email|hire|job|work with)\b/.test(text)) {
      return "You can find contact details on the Contact section. If you'd like, ask 'how to contact' and I'll show an email template.";
    }

    // resume
    if (/\b(resume|cv|curriculum)\b/.test(text)) {
      return "I'd recommend checking the Projects and Experience sections. If you want a direct link to a resume, ask 'send resume'.";
    }

    // jokes
    if (/\b(joke|funny)\b/.test(text)) {
      return "Why did the jellyfish blush? Because it saw the ocean's bottom! 🪼";
    }

    // follow-up using history: if user recently asked about projects
    const lastUser = [...history].reverse().find((h) => h.from === 'user');
    if (lastUser && /\b(tell me more|more|details)\b/.test(text) && /project|portfolio/.test(lastUser.text.toLowerCase())) {
      return "Sure — check the Projects section for full writeups. I can highlight one if you name it.";
    }

    // fallback
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  function send() {
    if (!value.trim()) return;
    const text = value.trim();
    const userMsg: ChatMessage = { id: genId(), from: 'user', text, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setValue('');

    // mark bot as typing
    setIsTyping(true);

    const reply = getBotResponse(text, [...messages, userMsg]);

    // simulate thinking time proportional to reply length
    const delay = Math.max(500, Math.min(2000, reply.length * 40));
    setTimeout(() => {
      const botMsg: ChatMessage = { id: genId(), from: 'bot', text: reply, ts: Date.now() };
      setMessages((m) => [...m, botMsg]);
      setIsTyping(false);
    }, delay + Math.random() * 300);
  }

  const content = (
    <div>
      {/* Chat window (simplified rectangle for debugging) */}
      {open && (
        <motion.div
          ref={chatRef}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 6 }}
          className="fixed bottom-6 right-6 w-80 h-64 z-[9999] rounded-lg bg-slate-800 text-white shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="px-4 py-2 border-b border-slate-700 flex items-center justify-between">
            <div className="text-sm font-semibold">Jellybot (debug)</div>
            <button onClick={() => setOpen(false)} className="text-sm text-slate-300">Close</button>
          </div>
          <div className="p-4 flex-1">
            <p className="text-sm text-slate-200">This is a simplified chat rectangle used for debugging.
              Click the jellyfish button to toggle this box.</p>
          </div>
        </motion.div>
      )}

      {/* Simple floating jellyfish trigger (bottom-right) — plain button for reliable clicks */}
      <div
        ref={triggerRef}
        className="fixed bottom-8 right-6 z-50 w-32 h-32 pointer-events-auto"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', outline: '2px dashed rgba(125,211,252,0.4)', borderRadius: 12 }}
        onClick={() => setOpen((s) => !s)}
      >
        {/* Render the jellyfish SVG as the visible trigger but do NOT pass an onClick
            to the creature itself — the wrapper handles clicks immediately to avoid
            the delayed callback inside RealisticSeaCreature that caused open->close toggles. */}
        <RealisticSeaCreature
          type="jellyfish"
          color="#7DD3FC"
          position={{ x: '50%', y: '50%' }}
          delay={0}
          size="small"
          interactive={true}
        />

        {/* Fallback visible inline SVG jellyfish in case the RealisticSeaCreature
            does not render correctly. This is pointer-events none so the wrapper
            still receives clicks; remove once the full creature is rendering. */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <ellipse cx="24" cy="16" rx="12" ry="8" fill="#7DD3FC" opacity="0.95" />
            <ellipse cx="24" cy="14" rx="6" ry="3" fill="white" opacity="0.6" />
            <g stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" opacity="0.9">
              <path d="M18 26 C18 30, 16 34, 14 38" />
              <path d="M22 26 C22 30, 22 34, 22 38" />
              <path d="M26 26 C26 30, 28 34, 30 38" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}
