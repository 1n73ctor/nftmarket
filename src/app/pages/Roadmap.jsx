import React from "react";
import styles from "./Roadmap.module.css";

const Roadmap = () => {
  return (
    <section className="container mx-auto">
      <div className="my-10">
        <h1 className="before:content-['--'] text-[#14c2a3] text-lg">
          Our Roadmap
        </h1>
      </div>
      <div className={styles.roadmap}>
        <div
          className={`${styles.roadmap_item} ${styles.roadmap_item_past}`}
        >
          <div className={styles.roadmap_item_title}>2023 Q1</div>
          <div className={styles.roadmap_item_marker}></div>
          <div className={styles.roadmap_item_text}>Development</div>
        </div>
        <div
          className={`${styles.roadmap_item} ${styles.roadmap_item_active}`}
        >
          <div className={styles.roadmap_item_title}>2023 Q2</div>
          <div className={styles.roadmap_item_marker}></div>
          <div className={styles.roadmap_item_text}>
            listing on the exchange
          </div>
        </div>
        <div className={styles.roadmap_item}>
          <div className={styles.roadmap_item_title}>2023 Q3</div>
          <div className={styles.roadmap_item_marker}></div>
          <div className={styles.roadmap_item_text}>
            Platform beta version launch
          </div>
        </div>
        <div className={styles.roadmap_item}>
          <div className={styles.roadmap_item_title}>2023 Q4</div>
          <div className={styles.roadmap_item_marker}></div>
          <div className={styles.roadmap_item_text}>Listing on exchanges</div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
