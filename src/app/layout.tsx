import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Sidebar from '@/widgets/sidebar/Sidebar';

const geistSans = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Страны',
    description: 'Вся страна мира',
};

const getCounries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
        const error = new Error('Ошибка при получении данных');
        throw error;
    }
    return response.json();
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const countries = await getCounries();
    return (
        <html lang="en">
            <body className={`${geistSans.variable}`}>
                <div className="layout">
                    <Sidebar data={countries} />

                    {children}
                </div>
            </body>
        </html>
    );
}
