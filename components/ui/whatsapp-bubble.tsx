"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "51957489765";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola Sol, vi tu portfolio y me gustaría conversar sobre una oportunidad.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppBubble() {
    const [showTooltip, setShowTooltip] = useState(true);

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex items-end gap-3">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="relative bg-bg-primary border border-border rounded-2xl px-4 py-3 shadow-xl max-w-[200px]"
                    >
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-bg-tertiary border border-border flex items-center justify-center text-text-tertiary hover:text-text-primary transition-colors"
                        >
                            <X className="w-3 h-3" />
                        </button>
                        <p className="text-xs text-text-secondary font-medium leading-snug">
                            ¿Tienes un proyecto en mente? ¡Conversemos! 💬
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
                aria-label="Chat en WhatsApp"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </motion.a>
        </div>
    );
}
