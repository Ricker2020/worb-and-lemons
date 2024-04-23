import Image from "next/image";
import styles from "./style.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <script src="./animation.js" />
        
        <div className={styles.container}>
            <div className={styles.topSection}>
                <h1 className={styles.tittle}>WORB & LEMONS</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum nostrum voluptas harum inventore hic et pariatur. Quia nobis repellat, ipsa omnis autem aspernatur dolorem cupiditate beatae dolorum laboriosam esse.
                </p>
            </div>
        <div>
            <div className={styles.timeline}>
                <div className={styles.line}></div>

                <div className={styles.section}>
                    <div className={styles.bead}></div>
                    <div className={styles.content}>
                        <h2>L</h2>
                        <p>
                            Love for Citrus.
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


                <div className={styles.section}>
                    <div className={styles.bead}></div>
                    <div className={styles.content}>
                        <h2>E</h2>
                        <p>
                            Exquisite Flavor.
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


                <div className={styles.section}>
                    <div className={styles.bead}></div>
                    <div className={styles.content}>
                        <h2>M</h2>
                        <p>
                            Multiple Uses.
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


                <div className={styles.section}>
                    <div className={styles.bead}></div>
                    <div className={styles.content}>
                        <h2>O</h2>
                        <p>
                            Overcoming Bitterness.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


                <div className={styles.section}>
                    <div className={styles.bead}></div>
                    <div className={styles.content}>
                        <h2>N</h2>
                        <p>
                            Natural Refreshment
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


            </div>
        </div>
      </div>
    </main>
  );
}
