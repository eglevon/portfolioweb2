import styles from './MenuBtn.module.css';

type MenuBtnProps = {
    onClick: () => void;
    isOpen: boolean;
    isDarkMode: boolean;
};

function MenuBtn({ onClick, isOpen, isDarkMode }: MenuBtnProps) {
    return (
        <button type='button' onClick={onClick} className={styles.menuBtn}>
            {isDarkMode ? <img src={isOpen ? '/xmark-light.svg' : '/bars-light.svg'} alt='Menu button' /> : <img src={isOpen ? '/xmark.svg' : '/bars.svg'} alt='Menu button' />}
        </button>
    );
}

export default MenuBtn;
