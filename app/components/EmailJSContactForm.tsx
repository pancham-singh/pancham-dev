// app/components/EmailJSContactForm.tsx
'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'

export default function EmailJSContactForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        if (!formRef.current) return

        try {
            // Initialize EmailJS with your public key
            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )

            if (result.text === 'OK') {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
                })
                formRef.current.reset()
            } else {
                throw new Error('Failed to send email')
            }
        } catch (error) {
            console.error('EmailJS Error:', error)
            setSubmitStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or email me directly at pancham.singh@email.com'
            })
        } finally {
            setIsSubmitting(false)

            // Auto-clear success message after 5 seconds
            if (submitStatus.type === 'success') {
                setTimeout(() => {
                    setSubmitStatus({ type: null, message: '' })
                }, 5000)
            }
        }
    }

    return (
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-neon-blue/20">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
                Send Me a Message
            </h3>

            {/* Status Message */}
            {submitStatus.type && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                        submitStatus.type === 'success'
                            ? 'bg-green-50 border border-green-200 text-green-700'
                            : 'bg-red-50 border border-red-200 text-red-700'
                    }`}
                >
                    {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                </motion.div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-neon-pink">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-neon-blue focus:outline-none transition-colors bg-white/50 disabled:opacity-50"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-neon-pink">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-neon-purple focus:outline-none transition-colors bg-white/50 disabled:opacity-50"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Subject Field */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-neon-pink focus:outline-none transition-colors bg-white/50 disabled:opacity-50"
                        placeholder="Project Inquiry / Collaboration / etc."
                    />
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message <span className="text-neon-pink">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-neon-blue focus:outline-none transition-colors bg-white/50 disabled:opacity-50 resize-none"
                        placeholder="Tell me about your project or opportunity..."
                    />
                </div>

                {/* Hidden fields for better email formatting */}
                <input type="hidden" name="to_name" value="Pancham" />
                <input type="hidden" name="from_name" value="Portfolio Visitor" />

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold text-white relative overflow-hidden group ${
                        isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink hover:shadow-lg'
                    }`}
                >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
                <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
            )}
          </span>
                    {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    )}
                </motion.button>
            </form>

            {/* Alternative contact info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                    Prefer email directly?{' '}
                    <a
                        href="mailto:dev.pancham.singh@email.com"
                        className="text-neon-blue hover:text-neon-purple transition-colors font-medium"
                    >
                        dev.pancham.singh@email.com
                    </a>
                </p>
            </div>
        </div>
    )
}