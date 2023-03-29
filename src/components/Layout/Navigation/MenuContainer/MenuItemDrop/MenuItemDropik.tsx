import Link from "next/link";
import styles from "./MenuItemDrop.module.scss"

const MenuItemDropik = () => {
    return ( <Link href={drop.link} className={styles.dropdown_list__link}>
        {drop.title}
    </Link> );
}

export default MenuItemDropik;