import { ICountry } from '@/shared/types/country.types';
import styles from './InfoCountry.module.scss';
import Image from 'next/image';

const InfoCounry = ({ data }: { data: ICountry }) => {
    return (
        <div className={styles.card}>
            <div>
                <h2>{data.translations.rus.common}</h2>
                <p>
                    <b>🏙️Сталица:</b> {data.region} {data.subregion && `- ${data.subregion}`}
                </p>
                <p>
                    <b>👨‍👩‍👧‍👦 Население: </b> {data.population}
                </p>
                {data.languages && (
                    <div className={styles.languages}>
                        <b>🗣️ Язык:</b>{' '}
                        {Object.values(data.languages).map((language) => (
                            <p key={language}>{language}</p>
                        ))}
                    </div>
                )}
            </div>
            <Image src={data.flags.svg} alt={data.flags.alt || `флаг ${data.translations.rus.common}`} width={100} height={100} />
        </div>
    );
};

export default InfoCounry;
