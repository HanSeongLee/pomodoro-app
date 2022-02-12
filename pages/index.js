import styles from './style.module.scss';
import Head from 'next/head';
import Header from "../components/Header";
import MultiSwitch from "../components/MultiSwitch";
import Container from "../components/Container";
import Timer from "../components/Timer";
import Settings from "../components/Settings";
import {useAppContext} from "../context/AppContext";

export default function Home() {
  const [state, _] = useAppContext();

  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0"
          />

          <title>{process.env.NEXT_PUBLIC_TITLE}</title>
          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta property="og:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta property="og:type"
                content="website"
          />
          <meta property="og:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta property="og:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta property="og:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />

          <meta name="twitter:card"
                content="summary_large_image"
          />
          <meta property="twitter:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta name="twitter:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta name="twitter:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta name="twitter:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        </Head>

        <main style={{
          fontFamily: state.settings.font,
          '--theme-color': state.settings.color,
        }}>
          <Header/>
          <Container className={styles.multiSwitchContainer}>
            <MultiSwitch options={['pomodoro', 'short break', 'long break']}/>
          </Container>
          <Container className={styles.timerContainer}>
            <Timer />
          </Container>
          <Container className={styles.settingsContainer}>
            <Settings />
          </Container>
        </main>
      </>
  );
}
