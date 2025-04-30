import { ICountryFlags } from '@/shared/types/country.types';
import styles from './CardCountry.module.scss';
import Image from 'next/image';

interface ICardCountry {
    flags: ICountryFlags;
    name: string;
    number: number;
}
const CardCountry = ({ flags, name, number }: ICardCountry) => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>
                <span>{number})</span>
                <p>{name}</p>
            </div>
            <Image src={flags.png} alt={`флаг ${name}`} objectFit="contain" width={80} height={50} />
        </div>
    );
};

export default CardCountry;
