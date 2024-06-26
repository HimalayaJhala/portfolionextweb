import React, { useState, useEffect, useRef } from "react";
import styles from "/styles/index.module.css";
import stylb from "/styles/social.module.css";
import stylec from "/styles/globals.css";
import Image from "next/image";
import Head from "next/head";
import ReactPlayer from "react-player";
import { gsap, ScrollTrigger } from "gsap";
import CustomCursor from "../components/CustomCursor";

const YourComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Profile pic and paragraph
  const imageRef = useRef(null);
  const paraRef = useRef(null);
  const wepara = useRef(null);
  const wevparaa = useRef(null);
  const wevparab = useRef(null);
  const wevparac = useRef(null);
  const wevparad = useRef(null);
  const wevparae = useRef(null);
  const wevparaf = useRef(null);
  const centerpic = useRef(null);

  const buttonRef = useRef(null);
  const social = useRef(null);

  useEffect(() => {
    const tl = gsap.to(imageRef.current, {
      yoyo: true,
      x: 590,
      duration: 3,
      delay: 1,
    });
    const para = gsap.to(paraRef.current, {
      yoyo: true,
      duration: 4,
      opacity: 1,
      delay: 2,
    });
    const weheading = gsap.to(wepara.current, {
      yoyo: true,
      duration: 1,
      opacity: 1,
      delay: 0,
    });
    gsap.to(paraRef.current, { yoyo: true, delay: 3, opacity: 1, y: -350 });
    //  gsap.to(wevpara.current, { yoyo: true, duration: 3, opacity: 1 ,delay: 0 });
    gsap.to(imageRef.current, {
      yoyo: true,
      x: 590,
      duration: 3,
      delay: 3,
      y: -350,
    });

    gsap.to(wevparaa.current, {
      yoyo: true,
      duration: 2,
      delay: 3,
      marginRight: 1200,
    });
    gsap.to(wevparab.current, {
      yoyo: true,
      duration: 2,
      delay: 3,
      marginRight: 1200,
    });
    gsap.to(wevparac.current, {
      yoyo: true,
      duration: 2,
      delay: 3,
      marginRight: 1200,
    });
    gsap.to(wevparad.current, {
      yoyo: true,
      duration: 2,
      delay: 3,
      marginRight: 1200,
    });
    gsap.to(wevparae.current, {
      yoyo: true,
      duration: 2,
      delay: 3,
      marginRight: 1200,
    });
    gsap.to(wevparaf.current, {
      yoyo: true,
      duration: 2,
      delay: 3,
      marginRight: 1200,
    });

    //  gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1 });

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1 });

    document.addEventListener("DOMContentLoaded", function () {
      const button = document.getElementById("buttond");
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { x: 10, duration: 0.3 });
      });
    });

    const buttonA = buttonRef.current;

    buttonA.addEventListener("mouseenter", () => {
      gsap.to(buttonA, { y: 10, duration: 0.3 });
    });

    buttonA.addEventListener("mouseleave", () => {
      gsap.to(buttonA, { x: 0, duration: 0.3 });
    });
    gsap.to(centerpic.current, {
      yoyo: true,
      duration: 2,
      delay: 3,
      height: 100,
    });
    gsap.to(buttonRef.current, {
      yoyo: true,
      duration: 2,
      delay: 3,
      backgroundColor: "#00ab7b",
      marginBottom: 20,
    });
    // gsap.to(social.current, { yoyo: true,    duration: 2 , delay: 3, backgroundColor:"#00ab7b"  });

    if (isMobile) {
      //Create mobile-specific timeline
      const mobileTl = gsap.timeline({ yoyo: true });

      mobileTl.to(imageRef.current, {
        yoyo: true,
        y: 220,
        duration: 7,
        delay: 1.2,
        top: 100,
        ease: "power1.inOut",
      });

      mobileTl.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1 });

      mobileTl.fromTo(imageRef.current, { scale: 1 }, { scale: 0.9 });

      const para = gsap.to(paraRef.current, {
        yoyo: true,
        y: -90,
        duration: 6,
        delay: 1.2,
        opacity: 1,
      });
      //Pause the main timeline (tl) before playing mobileTl
      tl.pause();
      weheading.pause();
      mobileTl.play();
    } else {
      // Play the main timeline for deskt
      tl.play();
    }
    // Cleanup function to ensure proper lifecycle
    return () => tl.kill(); // Stop main timeline when component unmounts
  }, []);

  return (
    <div className={styles.bodyContainer}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap"
          rel="stylesheet"
        />
        <title> Himalaya Jhala portfolio</title>
        <meta
          name="Himalaya Jhala Portfolio website"
          content=" Web Developer: Explore the portfolio of Himalaya Jhala, showcasing his expertise in crafting user-friendly and impactful web experiences using JavaScript, HTML, CSS, React,React Native  Next.js, and Node.js and strong UI/UX design skills."
        />
        <meta name="theme-color" content="WHITE" />
      </Head>
      {/* <audio src="https://www.youtube.com/watch?v=4yv4ea1pFp4"></audio> */}

      {/* <CustomCursor/> */}
      <div className={styles.scrollBehavior}>
        {/* <div className={styles.b1}>
          <div className={styles.heading}>
            <h1 className={styles.we_belive}>
              WE BELIEVE DEVELOPER SHAPE THE <span className={styles.future}>FUTURE </span>
            </h1>
          </div>
        </div> */}

        {/* Heading */}

        <div ref={wepara} className={styles.newboxdrop} style={{ opacity: 0 }}>
          <div className={styles.newbox}>
            <p ref={wevparaa} className={styles.h1}>
              {" "}
              WE{" "}
            </p>
            <p ref={wevparab} className={styles.h2}>
              {" "}
              BELIEVE
            </p>
            <p ref={wevparac} className={styles.h3}>
              {" "}
              DEVELOPER
            </p>
            <p ref={wevparad} className={styles.h4}>
              {" "}
              SHAPE
            </p>
            <p ref={wevparae} className={styles.h5}>
              {" "}
              THE
            </p>
            <p ref={wevparaf} className={styles.h6}>
              {" "}
              FUTURE
            </p>
          </div>
        </div>

        {/* Profilepic */}

        {/* <div className="styles.iiitem">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div> */}
        <div className={styles.centerpic} ref={centerpic}>
          <Image
            ref={imageRef}
            className={styles.pic}
            src="/download.jpeg"
            alt="Profile Picture"
            width={400}
            height={400}
          />
          <p
            ref={paraRef}
            className={styles.paragraph}
            style={{ opacity: 0, position: "relative" }}
          >
            Im Himalaya : a versatile frontend developer proficient in ReactJS,
            React Native, Next.js and more. With a strong focus on creating
            exceptional UI,UX across web and mobile platforms. I excel in
            collaborating with cross-functional teams to deliver high-quality
            products. My expertise extends to building responsive interfaces,
            optimizing performance, and ensuring seamless navigation. Beyond
            skills, I am dedicated to continuous learning and staying updated
            with the latest trends in development.
          </p>
        </div>

        {/* Downloadbutton */}
        <div className={styles.buttonparentsparent}>
          <div className={styles.buttonparent} ref={buttonRef}>
            <div className={styles.but}>
              <Image
                style={{ borderRadius: 18, width: 180 }}
                className="rounded-xl"
                src="/ResumeThumbnail.png"
                alt="ResumeThumbnail"
                width={150}
                height={200}
              />
            </div>
            <div className={styles.buttond}>
              <a
                href="https://drive.google.com/file/d/1dT7FtGMpG54BA-KBPT4j2OV2IGo-Piq4/view?usp=sharing"
                className={styles.downloadResumeButton}
                aria-label="Download Resume"
              >
                Download Resume
              </a>
            </div>

            {/* SocialLink */}
            {/* <div className={styles.socialc} > */}
            <div className={styles.social} ref={social}>
              <div className={styles.socials1}>
                <a href="https://www.linkedin.com/in/himalaya-jhala-879542231/">
                  <Image
                    src="/linkedin.png"
                    alt="leetcode"
                    width={60}
                    height={60}
                  />
                </a>
              </div>
              {/* 
              <div className={styles.socials2}>
                <a href="https://leetcode.com/HimalayaJhala/">
                  <Image
                    src="/leetcode.png"
                    alt="leetcode"
                    width={50}
                    height={50}
                  />
                </a>
              </div> */}

              <div className={styles.socials3}>
                <a href="https://github.com/HimalayaJhala">
                  <Image
                    src="/github.png"
                    alt="leetcode"
                    width={60}
                    height={60}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30rem] flex flex-col items-center justify-evenly">
          <div className=" bg-lime-400 w-[40rem] h-[15rem]  rounded-[3rem] text-[6rem]  flex justify-center ">
            Projects
          </div>
          <div className={styles.Firstbox}>
            <div className={styles.playerwrapper1}>
              <Image
                className={styles.iphone}
                src="/iPhone15.png"
                alt="phone"
                width={352}
                height={650}
              />
              {isClient && (
                <div
                  className={styles.Rplayer}
                  style={{
                    width: "350px",
                    height: "590px",
                    position: "relative",
                    overflow: "hidden",
                    top: "32px",
                  }}
                >
                  <ReactPlayer
                    className="react-player"
                    url="/Screen1.mp4"
                    width="355px"
                    height="590px"
                    playing={true}
                    loop={true}
                    controls={false}
                    muted={true}
                  />
                </div>
              )}
            </div>

            <div className={styles.paramob}>
              <p className={styles.heading1}>
                I recently developed a modern React Native to-do app that
                features a sleek and intuitive design inspired by Apple renowned
                design aesthetics. The app leverages advanced React Native
                components to create a seamless user experience across both iOS
                and Android platforms. Using the emulator on my device, I was
                able to rigorously test and fine-tune the UI/UX to ensure smooth
                performance and responsiveness. The app includes features like
                state management with Redux, real-time synchronization, and
                elegant animations that enhance usability. Its clean interface,
                combined with efficient functionality, offers users an appealing
                and productive task management solution.
              </p>
            </div>
          </div>

          <div className={styles.laptopmove}>
            <div className={styles.laptopdiv}>
              <Image
                className={styles.laptop}
                src="/macbookp.png"
                alt="laptop"
                width={1284}
                height={792}
              />
              {isClient && (
                <div style={{ position: "absolute" }}>
                  <ReactPlayer
                    className={styles.reactplayer1}
                    url="/Recording.mp4"
                    width="960px"
                    height="764px"
                    playing={true}
                    loop={true}
                    controls={false}
                    muted={true}
                    // style={{borderRadius: '100px'}}
                  />
                </div>
              )}
            </div>

            <div className={styles.laptopdiv1}>
              <Image
                className={styles.laptop1}
                src="/macbookp.png"
                alt="laptop"
                width={380}
                height={242}
              />
              {isClient && (
                <div style={{ overflow: "hidden" }}>
                  <ReactPlayer
                    className={styles.reactplayer2}
                    url="/Recording.mp4"
                    width="285px"
                    height="190px"
                    playing={true}
                    loop={true}
                    controls={false}
                    muted={true}
                    playsInline
                    // overflow={hidden}
                  />
                </div>
              )}
            </div>

            <div className={styles.laptoppara}>
              <p className={styles.heading2}>
                I created a UI/UX replica of Tinder specifically designed for
                dogs, named Tindog. This project was developed using Bootstrap
                5, leveraging its powerful grid system and pre-styled components
                to achieve a responsive and visually appealing interface.
                Utilizing my basic core skills., I incorporated features like a
                carousel, price tags, and many other elements, showcasing my
                ability to create a comprehensive and delightful application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
