'use client';

import React, { useActionState, useEffect, useRef, useState } from 'react';
import { BookOpen, User, Building, MapPin, Phone, ArrowLeft, Loader2, X, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import Link from 'next/link';
import { registerUser } from '@/app/actions/register';

const initialState = {
    success: false,
    message: '',
};

export default function RegistrationForm() {
    const [state, formAction, isPending] = useActionState(registerUser, initialState);
    const [showModal, setShowModal] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);

    useEffect(() => {
        const checkDeadline = () => {
            const deadline = new Date('2026-01-10T23:59:59');
            if (new Date() > deadline) {
                setIsRegistrationClosed(true);
            }
        };
        checkDeadline();
    }, []);

    useEffect(() => {
        if (state.message) {
            setShowModal(true);
            if (state.success && formRef.current) {
                formRef.current.reset();
            }
        }
    }, [state]);

    if (isRegistrationClosed) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
                <nav className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-center h-16">
                            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
                                <div className="bg-amber-100 dark:bg-amber-900/40 p-1.5 rounded-full">
                                    <BookOpen className="text-amber-600 dark:text-amber-500 w-4 h-4" />
                                </div>
                                <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">ಮಲಬಾರ್ ಸಂಗಮ</span>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                            >
                                <ArrowLeft size={16} />
                                ಹಿಂದಕ್ಕೆ
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="max-w-xl mx-auto px-4 py-20 text-center animate-fade-in-up">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-zinc-800 p-12">
                        <div className="flex justify-center mb-8">
                            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-2xl">
                                <Calendar className="w-10 h-10 text-amber-600 dark:text-amber-500" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            ನೋಂದಣಿ ಮುಕ್ತಾಯಗೊಂಡಿದೆ
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                            ಮಲಬಾರ್ ಕನ್ನಡ ಸಂಗಮ 2026 ರ ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆ ಮುಕ್ತಾಯಗೊಂಡಿದೆ. <br /> ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು ಸಂಘಟಕರನ್ನು ಸಂಪರ್ಕಿಸಿ.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-xl font-semibold transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
                            <div className="bg-amber-100 dark:bg-amber-900/40 p-1.5 rounded-full">
                                <BookOpen className="text-amber-600 dark:text-amber-500 w-4 h-4" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">ಮಲಬಾರ್ ಸಂಗಮ</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            ಹಿಂದಕ್ಕೆ
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-xl mx-auto px-4 py-16 sm:px-6">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-zinc-800 overflow-hidden">

                    {/* Header */}
                    <div className="bg-white dark:bg-zinc-900 p-8 pt-10 text-center border-b border-gray-100 dark:border-zinc-800">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">ನೋಂದಣಿ ಫಾರಂ</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ</p>
                    </div>

                    {/* Form */}
                    <form ref={formRef} action={formAction} className="p-8 space-y-8 bg-gray-50/30 dark:bg-zinc-900/30">

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                1. ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು <span className="text-amber-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                                    placeholder="ಪೂರ್ಣ ಹೆಸರು"
                                />
                            </div>
                        </div>

                        {/* Institution Field */}
                        <div>
                            <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                2. ಸಂಸ್ಥೆ (Institution) <span className="text-amber-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Building className="h-5 w-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    id="institution"
                                    name="institution"
                                    required
                                    className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                                    placeholder="ಕಲಿಯುತ್ತಿರುವ ಸಂಸ್ಥೆ"
                                />
                            </div>
                        </div>

                        {/* Place Field */}
                        <div>
                            <label htmlFor="place" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                3. ಸ್ಥಳ (Place) <span className="text-amber-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    id="place"
                                    name="place"
                                    required
                                    className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                                    placeholder="ವಾಸಸ್ಥಳ"
                                />
                            </div>
                        </div>

                        {/* Mobile Field */}
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                4. ಮೊಬೈಲ್ ಸಂಖ್ಯೆ <span className="text-amber-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                                </div>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                                    placeholder="10 ಅಂಕಿಯ ಸಂಖ್ಯೆ"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    minLength={10}
                                    onInput={(e) => {
                                        // Only allow numeric input
                                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                                    }}
                                    title="Please enter exactly 10 digits"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-lg shadow-amber-500/20 text-md font-bold text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                        ನೋಂದಾಯಿಸಲಾಗುತ್ತಿದೆ...
                                    </>
                                ) : (
                                    'ನೋಂದಣಿ ಪೂರ್ಣಗೊಳಿಸಿ'
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-w-sm w-full p-8 transform transition-all scale-100 border border-gray-100 dark:border-zinc-800">
                        <div className="flex justify-end -mt-2 -mr-2 mb-4">
                            <button onClick={() => setShowModal(false)} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="text-center">
                            <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-6 ${state.success ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                                {state.success ? (
                                    <CheckCircle className={`h-8 w-8 ${state.success ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`} />
                                ) : (
                                    <AlertCircle className={`h-8 w-8 ${state.success ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`} />
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {state.success ? 'ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ!' : 'ಸಮಸ್ಯೆ ಎದುರಾಗಿದೆ'}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                                {state.message}
                            </p>
                            <button
                                type="button"
                                className={`w-full inline-flex justify-center rounded-xl border border-transparent shadow-md px-6 py-3 text-base font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${state.success ? 'bg-green-600 hover:bg-green-700 shadow-green-500/20' : 'bg-red-600 hover:bg-red-700 shadow-red-500/20'}`}
                                onClick={() => setShowModal(false)}
                            >
                                {state.success ? 'ಸರಿ' : 'ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
