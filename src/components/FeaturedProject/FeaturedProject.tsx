import styles from "./FeaturedProject.module.css";
import Carousel from "./Carousel";
import Image from "next/image";

export default function FeaturedProject() {
  const imageBaseUrl = (img: string) => `/projects/elements/${img}.png`;

  const images = [
    "hub",
    "hub_energiekern",
    "community_bereich_hub",
    "lootboxen",
    "nether_spawn",
    "ocean_spawn",
    "sky_spawn",
    "stone_spawn",
    "boss_raum_stage_1",
    "hub_topview",
    "hub_boss_raum_portal",
    "stage_2_villager_stand",
    "stage2_raum_hub",
    "uniques_im_hub",
    "hub_energiekern_2",
    "zerberster",
    "enderchest",
    "gravitationsstein",
    "element_pickaxe",
    "abgabeziel_hub",
  ];

  return (
    <section className={styles.section} id="featured-project">
      <div className={styles.inner}>
        <span className={styles.label}>FEATURED PROJECT</span>

        <Carousel
          slides={images.map((i) => (
            <Image src={imageBaseUrl(i)} alt={i} width={2560} height={1440} />
          ))}
        />

        <div className={styles.content}>
          <h2>Minecraft Elements</h2>

          <p>
            A progression-focused Minecraft experience featuring custom bosses,
            puzzles, exploration and unique gameplay mechanics.
          </p>

          <div className={styles.tags}>
            <span>Datapacks</span>
            <span>Game Design</span>
            <span>Boss Systems</span>
            <span>Puzzles</span>
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <a
            href="https://github.com/TheFoxCraft/minecraft-elements"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <Image src="/logos/github.svg" alt="" width={24} height={24} />
            View Source
          </a>

          <a
            href="https://modrinth.com/datapack/minecraft-elements"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <Image src="/logos/modrinth.svg" alt="" width={24} height={24} />
            Download Datapack
          </a>
        </div>
      </div>
    </section>
  );
}
