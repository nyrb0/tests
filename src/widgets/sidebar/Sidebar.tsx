import { ICountry } from '@/shared/types/country.types';
import styles from './Sidebar.module.scss';
import CardCountry from './UI/block-card-country/CardCountry';

const Sidebar = ({ data }: { data: ICountry[] }) => {
    return (
        <aside className={styles.aside}>
            <h1>Вся страна</h1>
            <p>({data.length}стран)</p>
            {data.map((country, index) => (
                <div key={country.name.common} className={styles.card}>
                    <CardCountry number={index + 1} name={country.translations.rus.common} flags={country.flags} />
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;
