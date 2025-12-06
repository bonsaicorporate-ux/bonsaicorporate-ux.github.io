import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchArchitecture() {
    const [step, setStep] = useState<'idle' | 'opening' | 'fetching' | 'returning' | 'closing'>('idle');

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                setStep('idle');
                await new Promise(r => setTimeout(r, 2000));
                setStep('opening');
                await new Promise(r => setTimeout(r, 1000));
                setStep('fetching');
                await new Promise(r => setTimeout(r, 1500));
                setStep('returning');
                await new Promise(r => setTimeout(r, 1500));
                setStep('closing');
                await new Promise(r => setTimeout(r, 1000));
            }
        };
        sequence();
    }, []);

    return (
        <div className="w-full h-full min-h-[300px] bg-white border-2 border-charcoal-ink shadow-base p-8 flex flex-col items-center justify-center font-mono relative overflow-hidden">

            {/* Labels */}
            <div className="absolute top-4 left-4 text-xs font-bold text-charcoal-ink/50 uppercase tracking-widest">
                Fig 4: Scraper Proxy Protocol
            </div>

            <div className="flex w-full justify-between items-center max-w-lg relative">

                {/* Local Environment (Left) */}
                <div className="flex flex-col items-center gap-2 z-10 relative">
                    <div className="w-24 h-24 border-2 border-charcoal-ink bg-rice-paper shadow-sm flex items-center justify-center relative">
                        <span className="font-bold">LOCAL</span>
                        {/* Lock Icon Indicator */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-olive-growth text-rice-paper flex items-center justify-center rounded-full text-[10px] border border-charcoal-ink">
                            <motion.span
                                animate={{ opacity: step === 'idle' || step === 'closing' ? 1 : 0.5 }}
                            >
                                {step === 'idle' || step === 'closing' ? '🔒' : '🔓'}
                            </motion.span>
                        </div>
                    </div>
                </div>

                {/* The Connection Line */}
                <div className="flex-1 h-0.5 bg-charcoal-ink/20 relative mx-4">
                    {/* The Gate (Barrier) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-12 bg-charcoal-ink"
                        animate={{
                            rotate: step === 'idle' || step === 'closing' ? 0 : 90,
                            scaleY: step === 'idle' || step === 'closing' ? 1 : 0.2
                        }}
                        transition={{ duration: 0.5, type: "spring" }}
                    />

                    {/* The Packet (Searcher) */}
                    {(step === 'fetching' || step === 'returning') && (
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-terracotta border border-charcoal-ink"
                            initial={{ left: "10%" }}
                            animate={{
                                left: step === 'fetching' ? "90%" : "10%",
                                backgroundColor: step === 'returning' ? "#E9C46A" : "#CB997E" // Terracotta -> Mustard
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    )}
                </div>

                {/* The Web (Right) */}
                <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-24 h-24 border-2 border-charcoal-ink/50 border-dashed bg-gray-50 flex items-center justify-center">
                        <span className="text-charcoal-ink/50">WEB</span>
                    </div>
                </div>
            </div>

            {/* Status Text */}
            <div className="mt-12 h-6 text-sm text-center font-bold text-olive-growth">
                <AnimatePresence mode="wait">
                    {step === 'idle' && <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>System Secured. Offline.</motion.span>}
                    {step === 'opening' && <motion.span key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Opening temporary gate...</motion.span>}
                    {step === 'fetching' && <motion.span key="fetch" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Proxying request anonymously...</motion.span>}
                    {step === 'returning' && <motion.span key="return" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Retrieving clean text...</motion.span>}
                    {step === 'closing' && <motion.span key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Severing connection.</motion.span>}
                </AnimatePresence>
            </div>

        </div>
    );
}
