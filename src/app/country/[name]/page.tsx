import { ICountry } from '@/shared/types/country.types';
import Link from 'next/link';
import styles from './page.module.scss';
import InfoCounry from '@/shared/UI/info-country/InfoCountry';
import IconArrow from '@/shared/icons/ArrowIcon';
import CardCountry from '@/shared/UI/block-card-country/CardCountry';
import { baseUrl } from '@/shared/api/baseUrl';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
    const country = await getCountryByName(params.name);

    return {
        icons: {
            icon: country.flags.png,
        },
        title: `Информация о стране: ${country.translations.rus.common}`,
        description: `${country.translations.rus.common} — страна в ${country.region}, население: ${country.population}`,
        openGraph: {
            title: `Информация о стране: ${country.translations.rus.common}`,
            description: `${country.translations.rus.common} — страна в ${country.region}`,
            images: [country.flags.png],
        },
    };
}

async function getBorderCountryNames(name: string) {
    const responce = await fetch(`${baseUrl}/all`);
    const countries: ICountry[] = await responce.json();

    const country = countries.find((country: ICountry) => country.name.common === name)!;
    return country.borders?.map((border) => {
        const borderCountry = countries.find((country) => country.cca3 === border)!;

        return {
            name: borderCountry.name.common,
            rusName: borderCountry.translations.rus.common,
            flag: borderCountry.flags,
        };
    });
}

const getCountryByName = async (name: string): Promise<ICountry> => {
    const response = await fetch(`${baseUrl}/name/${name}?fullText=true`);
    const country = await response.json();
    return country[0];
};
const SelfCountry = async ({ params: { name } }: { params: { name: string } }) => {
    const country = await getCountryByName(name);
    const borders = await getBorderCountryNames(country.name.common);
    return (
        <main className={styles.page}>
            <Link href={'/'} className={styles.goBack}>
                <IconArrow />
            </Link>
            <InfoCounry data={country} />
            {borders && (
                <>
                    <h3>Границы</h3>
                    {borders.map((c, i) => (
                        <CardCountry key={c.name} name={c.rusName} enName={c.name} flags={c.flag} number={i + 1} />
                    ))}
                </>
            )}
        </main>
    );
};

export default SelfCountry;
