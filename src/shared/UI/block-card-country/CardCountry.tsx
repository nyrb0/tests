import { ICountryFlags } from '@/shared/types/country.types';
import styles from './CardCountry.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface ICardCountry {
    flags: ICountryFlags;
    name: string;
    number: number;
    enName: string;
}
const CardCountry = ({ flags, name, number, enName }: ICardCountry) => {
    return (
        <Link href={`/country/${enName}`} className={styles.card}>
            <div className={styles.name}>
                <span>{number})</span>
                <p>{name}</p>
            </div>
            <Image src={flags.png} alt={`флаг ${name}`} width={100} height={50} style={{ objectFit: 'cover' }} />
        </Link>
    );
};

export default CardCountry;
