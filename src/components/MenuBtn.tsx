import useLanguage from '../hooks/useLanguage';
import styles from './MenuBtn.module.css';

type MenuBtnProps = {
    onClick: () => void;
    isOpen: boolean;
    isDarkMode: boolean;
};

function MenuBtn({ onClick, isOpen, isDarkMode }: MenuBtnProps) {
    const { t } = useLanguage();

    return (
        <button type='button' onClick={onClick} className={styles.menuBtn}>
            {isDarkMode ? <img src={isOpen ? '/xmark-light.svg' : '/bars-light.svg'} alt={t.controls.menu} /> : <img src={isOpen ? '/xmark.svg' : '/bars.svg'} alt={t.controls.menu} />}
        </button>
    );
}

export default MenuBtn;
