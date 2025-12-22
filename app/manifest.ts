import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Malabar Kannada Sangamam',
        short_name: 'MK Sangamam',
        description: 'Malabar Kannada Sangamam - Culture, Education, Unity',
        start_url: '/',
        display: 'standalone',
        background_color: '#fffbf0',
        theme_color: '#b45309',
        icons: [
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
