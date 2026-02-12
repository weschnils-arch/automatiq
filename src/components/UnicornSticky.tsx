import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Send, X, CheckCircle2 } from 'lucide-react';

export default function UnicornSticky() {
    const { t } = useApp();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setIsOpen(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed z-50 bottom-5 right-5">
            <div
                className="transition-all duration-500 ease-in-out origin-bottom-right"
                style={{
                    width: isOpen ? 'min(420px, calc(100vw - 40px))' : 'auto',
                    borderRadius: isOpen ? '16px' : '9999px',
                    background: isOpen
                        ? 'rgba(10, 10, 10, 0.95)'
                        : 'rgba(20, 20, 20, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    cursor: isOpen ? 'default' : 'pointer',
                    overflow: 'hidden',
                }}
                onClick={() => {
                    if (!isOpen) setIsOpen(true);
                }}
            >
                {/* Top bar */}
                <div
                    className="flex items-center transition-all duration-500"
                    style={{
                        padding: isOpen ? '14px 20px' : '4px 20px 4px 4px',
                        borderBottom: isOpen
                            ? '1px solid rgba(255, 255, 255, 0.08)'
                            : 'none',
                    }}
                >
                    {/* Animated CSS Orb */}
                    <div
                        className="flex-shrink-0 transition-all duration-500"
                        style={{
                            width: isOpen ? '36px' : '56px',
                            height: isOpen ? '36px' : '56px',
                            borderRadius: '50%',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <div className="orb-inner" style={{ transform: 'scale(0.8)' }} />
                    </div>

                    {/* Text */}
                    <span
                        className="ml-3 text-sm font-medium tracking-wide select-none whitespace-nowrap transition-all duration-300"
                        style={
                            isOpen
                                ? { color: 'rgba(255,255,255,0.8)' }
                                : {
                                    background:
                                        'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }
                        }
                    >
                        What do you want to build?
                    </span>

                    {isOpen && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(false);
                            }}
                            className="ml-auto p-1.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="w-4 h-4 text-gray-400" />
                        </button>
                    )}
                </div>

                {/* Form */}
                <div
                    className="transition-all duration-500 ease-in-out overflow-hidden"
                    style={{
                        maxHeight: isOpen ? '500px' : '0px',
                        opacity: isOpen ? 1 : 0,
                    }}
                >
                    <div className="p-5 pt-3">
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                </div>
                                <h4 className="text-sm font-semibold text-white mb-1">
                                    {t('Nachricht gesendet!', 'Message Sent!')}
                                </h4>
                                <p className="text-xs text-gray-400">
                                    {t(
                                        'Vielen Dank! Wir werden uns bald melden.',
                                        'Thank you! We will be in touch soon.'
                                    )}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t('Ihr Name', 'Your name')}
                                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t('ihre@email.de', 'your@email.com')}
                                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t(
                                            'Beschreiben Sie Ihr Projekt...',
                                            'Describe your project...'
                                        )}
                                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                    {t('Senden', 'Send')}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Orb animation styles */}
            <style>{`
        .orb-inner {
          position: absolute;
          inset: -20%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 35% 40%, rgba(120, 80, 255, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 65% 55%, rgba(60, 120, 255, 0.8) 0%, transparent 45%),
            radial-gradient(circle at 45% 70%, rgba(180, 60, 255, 0.6) 0%, transparent 40%),
            radial-gradient(circle at 55% 30%, rgba(80, 200, 255, 0.5) 0%, transparent 35%),
            radial-gradient(circle at 40% 50%, rgba(100, 50, 200, 1) 0%, rgba(30, 30, 80, 1) 100%);
          animation: orbRotate 8s ease-in-out infinite, orbPulse 4s ease-in-out infinite;
          filter: blur(1px) saturate(1.3);
        }

        .orb-inner::before {
          content: '';
          position: absolute;
          inset: 5%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 35%, rgba(255, 255, 255, 0.25) 0%, transparent 30%),
            radial-gradient(circle at 60% 60%, rgba(100, 180, 255, 0.4) 0%, transparent 35%),
            radial-gradient(circle at 50% 45%, rgba(200, 100, 255, 0.3) 0%, transparent 40%);
          animation: orbShift 6s ease-in-out infinite reverse;
        }

        .orb-inner::after {
          content: '';
          position: absolute;
          inset: 10%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4) 0%, transparent 20%);
          animation: orbHighlight 5s ease-in-out infinite;
        }

        @keyframes orbRotate {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(120deg) scale(1.05); }
          66% { transform: rotate(240deg) scale(0.97); }
        }

        @keyframes orbPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }

        @keyframes orbShift {
          0%, 100% { transform: rotate(0deg) translate(0, 0); }
          25% { transform: rotate(-30deg) translate(5%, -3%); }
          50% { transform: rotate(15deg) translate(-3%, 5%); }
          75% { transform: rotate(-15deg) translate(3%, 2%); }
        }

        @keyframes orbHighlight {
          0%, 100% { opacity: 0.7; transform: translate(0, 0); }
          50% { opacity: 1; transform: translate(5%, 5%); }
        }
      `}</style>
        </div>
    );
}
