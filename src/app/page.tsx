import styles from "./page.module.css";

import { ExpenseForm } from "@/components";

export default function Home() {
  return (
    <main className={styles.Home}>
      <ExpenseForm />
    </main>
  );
}
