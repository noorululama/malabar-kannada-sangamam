'use server'

import { getDoc } from '@/lib/google-sheets';

export async function registerUser(prevState: any, formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const institution = formData.get('institution') as string;
        const place = formData.get('place') as string;
        const mobile = formData.get('mobile') as string;

        // Basic validation
        if (!/^\d{10}$/.test(mobile)) {
            return { success: false, message: 'ದಯವಿಟ್ಟು 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ (Please enter a valid 10-digit mobile number).' };
        }

        // Deadline Validation
        const deadline = new Date('2026-01-10T23:59:59+05:30');
        if (new Date() > deadline) {
            return { success: false, message: 'ನೋಂದಣಿ ಮುಕ್ತಾಯಗೊಂಡಿದೆ (Registration has been closed).' };
        }

        const doc = await getDoc();
        const sheet = doc.sheetsByIndex[0];

        await sheet.addRow({
            Name: name,
            Institution: institution,
            Place: place,
            Mobile: mobile,
            SubmittedAt: new Date().toLocaleString()
        });

        return { success: true, message: 'ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ (Registration Successful)!' };
    } catch (e: any) {
        console.error("Registration Error: ", e);
        return { success: false, message: 'Failed to register. Please check configuration or try again.' };
    }
}
