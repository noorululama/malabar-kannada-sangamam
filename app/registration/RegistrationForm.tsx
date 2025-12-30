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
            <div className="min-h-screen bg-[#fffbf0] dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
                <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-amber-100 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                <BookOpen className="text-amber-700 dark:text-amber-500" />
                                <span className="text-xl font-bold text-amber-700 dark:text-amber-500">ಮಲಬಾರ್ ಸಂಗಮ</span>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400"
                            >
                                <ArrowLeft size={16} />
                                ಹಿಂದಕ್ಕೆ (Back)
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-amber-100 dark:border-gray-800 p-12">
                        <div className="flex justify-center mb-6">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full">
                                <Calendar className="w-12 h-12 text-amber-700 dark:text-amber-500" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            ನೋಂದಣಿ ಮುಕ್ತಾಯಗೊಂಡಿದೆ (Registration Closed)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                            ಮಲಬಾರ್ ಕನ್ನಡ ಸಂಗಮ 2026 ರ ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆ ಮುಕ್ತಾಯಗೊಂಡಿದೆ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು ಸಂಘಟಕರನ್ನು ಸಂಪರ್ಕಿಸಿ.
                            <br /><br />
                            Registration for Malabar Kannada Sangamam 2026 is now closed. Please contact the organizers for more information.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-amber-700 hover:bg-amber-800 transition-colors"
                        >
                            ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ (Back to Home)
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fffbf0] dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-amber-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <BookOpen className="text-amber-700 dark:text-amber-500" />
                            <span className="text-xl font-bold text-amber-700 dark:text-amber-500">ಮಲಬಾರ್ ಸಂಗಮ</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400"
                        >
                            <ArrowLeft size={16} />
                            ಹಿಂದಕ್ಕೆ (Back)
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-amber-100 dark:border-gray-800 overflow-hidden">

                    {/* Header */}
                    <div className="bg-amber-700 dark:bg-gray-800 p-8 text-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">ಮಲಬಾರ್ ಕನ್ನಡ ಸಂಗಮ</h1>
                        <p className="text-amber-100 dark:text-gray-400 text-lg">ನೋಂದಣಿ ಫಾರಂ (Registration Form)</p>
                    </div>

                    {/* Form */}
                    <form ref={formRef} action={formAction} className="p-8 space-y-6">

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                1. ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು (Student Name) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ"
                                />
                            </div>
                        </div>

                        {/* Institution Field */}
                        <div>
                            <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                2. ಕಲಿಯುತ್ತಿರುವ ಸಂಸ್ಥೆ (Studying Institution) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Building className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="institution"
                                    name="institution"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="ಸಂಸ್ಥೆಯ ಹೆಸರು"
                                />
                            </div>
                        </div>

                        {/* Place Field */}
                        <div>
                            <label htmlFor="place" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                3. ವಾಸವಿರುವ ಸ್ಥಳ (Place of Residence) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="place"
                                    name="place"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="ಊರು / ಸ್ಥಳ"
                                />
                            </div>
                        </div>

                        {/* Mobile Field */}
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                4. ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (Mobile Number) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
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
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                        ನೋಂದಾಯಿಸಲಾಗುತ್ತಿದೆ... (Registering...)
                                    </>
                                ) : (
                                    'ನೋಂದಾಯಿಸಿ (Register Now)'
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-sm w-full p-6 transform transition-all scale-100">
                        <div className="flex justify-end">
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="text-center">
                            <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full mb-4 ${state.success ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                                {state.success ? (
                                    <CheckCircle className={`h-6 w-6 ${state.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} />
                                ) : (
                                    <AlertCircle className={`h-6 w-6 ${state.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} />
                                )}
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                {state.success ? 'ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ' : 'ನೋಂದಣಿ ವಿಫಲವಾಗಿದೆ'}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                {state.message}
                            </p>
                            <button
                                type="button"
                                className={`w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm ${state.success ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' : 'bg-red-600 hover:bg-red-700 focus:ring-red-500'}`}
                                onClick={() => setShowModal(false)}
                            >
                                {state.success ? 'ಸರಿ (OK)' : 'ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ (Try Again)'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
