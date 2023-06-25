import { useCallback, useEffect } from "react";
import "./Styles/desktop.css";
import logo from './Images/logoInfinity.png';
import kidsImg from './Images/Kids reading-amico.png'
import threeWomen from './Images/company-female-solidarity-1.png'
import adhd from './Images/Adhd.png'
import autism from './Images/Autism.jpg'
import understood from './Images/understood.png'
import ocd from './Images/OCD.webp'
import mentalHealth from './Images/mental health.png'
import tnn from './Images/TNN.jpeg'
import hiFive from './Images/bubble-gum-equality.png'
import love from './Images/Heart.png'

const Desktop1 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButton1Click = useCallback(() => {
    window.open("https://www.youtube.com/@HowtoADHD");
  }, []);

  const onButton2Click = useCallback(() => {
    window.open("https://www.instagram.com/autism_sketches/");
  }, []);

  const onButton3Click = useCallback(() => {
    window.open("https://www.understood.org/");
  }, []);

  const onButton4Click = useCallback(() => {
    window.open("https://ocdgamechangers.com/");
  }, []);

  const onButton5Click = useCallback(() => {
    window.open("https://www.mentalhelp.net/");
  }, []);

  const onButton6Click = useCallback(() => {
    window.open("https://www.theneurodivergentnurse.com/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aBOUTText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='letsDiveIn']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNeurodivergenceTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gradientBox']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResourcesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rESOURCESText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onStoriesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='sTORIESText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton41Click = useCallback(() => {
    window.open("https://ocdgamechangers.com/");
  }, []);

  return (
    <div className="desktop-1">
      <div className="dyslexia-box" />
      <div className="autism-box" />
      <div className="other-types-box" />
      <div className="adhd-box" />
      <div className="hero-page" data-animate-on-scroll>
        <img
          className="kids-readingamico-icon"
          alt=""
          src={kidsImg}
        />
        <b className="lets-dive-in" data-scroll-to="letsDiveIn">
          Let’s Dive In To Know More About Neurodiversity.
        </b>
        <div className="change-the-narrative">
          Change the narrative about neurodiversity.
        </div>
      </div>
      <img className="hi-five-img" alt="" src={hiFive} />
      <div className="about" data-scroll-to="aBOUTText">
        ABOUT
      </div>
      <div className="our-goal-box" />
      <div className="our-vision-box" />
      <div className="our-mission-box" />
      <div className="goal-frame">
        <div className="our-goal-wrapper">
          <div className="our-goal">Our Goal</div>
        </div>
      </div>
      <div className="our-vision">Our Vision</div>
      <div className="our-mission-wrapper">
        <div className="our-goal">Our Mission</div>
      </div>
      <div className="our-goal-is">
        “Our goal is to provide reliable information and resources about
        neurodiversity.”
      </div>
      <div className="our-goal-is1">
        “Our goal is to provide reliable information and resources about
        neurodiversity.”
      </div>
      <div className="our-goal-is2">
        “Our goal is to provide reliable information and resources about
        neurodiversity.”
      </div>
      <div className="gradient-box" data-scroll-to="gradientBox" />
      <div className="around-one-in">
        AROUND ONE IN FIVE PEOPLE ARE NEURODIVERGENT.
      </div>
      <div className="autism-autism-is-container">
        <p className="autism">
          <span className="autism1">Autism</span>
        </p>
        <p className="autism">
          <span className="autism1">&nbsp;</span>
        </p>
        <p className="autism">
          <span>
            Autism is known as a "spectrum disorder" because autistic people
            range in what autistic traits they have, how these traits present,
            and their support needs.
          </span>
        </p>
        <p className="autism">
          <span>
            Autism is a broad set of conditions that may include challenges with
            socializing and social skills, repetitive behaviors, and speech
            difficulties that can lead people to communicate via Alternative
            Augmentative Communication, writing, typing, or sign language
            instead of verbally.
          </span>
        </p>
        <p className="autism">
          <span>{`According to the `}</span>
          <a
            className="autism-self-advocacy-network"
            href="https://autisticadvocacy.org/about-asan/about-autism/"
            target="_blank"
          >
            <span>
              <span className="autism-self-advocacy-network1">
                Autism Self-Advocacy Network
              </span>
            </span>
          </a>
          <span>
            , autistic people generally think, process their senses, move,
            communicate, and socialize in a consistent range of ways that differ
            from how allistic, non-autistic, people do.
          </span>
        </p>
      </div>
      <div className="adhd-attention-deficit-container">
        <p className="autism">ADHD</p>
        <p className="autism">&nbsp;</p>
        <p className="attention-deficit-hyperactivit">
          <a
            className="autism-self-advocacy-network"
            href="https://www.verywellmind.com/adhd-symptoms-4157281"
            target="_blank"
          >
            <span>
              <span className="autism-self-advocacy-network1">
                Attention deficit hyperactivity disorder
              </span>
            </span>
          </a>
          <span>
            {" "}
            (ADHD) is an executive function dysregulation disorder, which means
            individuals may have difficulties managing their thoughts,
            attention, behaviors, and emotions.
          </span>
          <br/>
          <span>
            People with ADHD may have difficulty with organization, be restless,
            seem disinterested or zoned out, and show inappropriate behavior
            when experiencing strong emotions.
          </span>
        </p>
        {/* <p className="autism">
          <span>
            People with ADHD may have difficulty with organization, be restless,
            seem disinterested or zoned out, and show inappropriate behavior
            when experiencing strong emotions.
          </span>
        </p>
        <p className="autism">
          <span>
            Thanks to their out-of-the-box thinking, people with ADHD are often
            great problem solvers, may be energetic and "fun," and are often
            sensitive to others
          </span>
        </p> */}
      </div>
      <div className="dyslexia-this-form-container">
        <p className="autism">Dyslexia</p>
        <p className="autism">&nbsp;</p>
        <p className="attention-deficit-hyperactivit">
          This form of neurodivergence involves speaking, reading, and writing.
          Dyslexia is typically associated with misreading, writing, or speaking
          words or letters out of order, but it encompasses more than that. For
          example, it may involve confusion with certain letters, difficulty
          organizing words into sentences, trouble acquiring a vocabulary or
          pronouncing words, and/or challenges following directions.
        </p>
        <p className="attention-deficit-hyperactivit">
          People with dyslexia are often big picture thinkers who excel at
          visual processing. In addition, they tend to have strong spatial
          awareness and may be very creative.
        </p>
      </div>
      <div className="other-types-other-container">
        <p className="autism">Other Types</p>
        <p className="autism">&nbsp;</p>
        <p className="attention-deficit-hyperactivit">
          Other types of neurodivergence include Tourette's, dyspraxia,
          synesthesia, dyscalculia, Down syndrome, epilepsy, and chronic mental
          health illnesses such as bipolar disorder, obsessive-compulsive
          disorder, borderline personality disorder, anxiety, and depression.
        </p>
      </div>
      <div className="resources" data-scroll-to="rESOURCESText">
        RESOURCES
      </div>
      <div className="how-to-adhd">
        <img
          className="logo-how-to-adhd"
          alt=""
          src={adhd}
        />
        <div className="button-1" onClick={onButton1Click} />
        <div className="how-to-adhd1">
          How to ADHD is a great resource to know more about ADHD brains and
          their daily struggles.
        </div>
        <div className="learn-more">Learn more</div>
      </div>
      <div className="autism-sketches">
        <div className="button-2" onClick={onButton2Click} />
        <div className="autism-sketches-is">{`Autism Sketches is an instagram page full of educational and informative posts about autism. `}</div>
        <div className="learn-more1">Learn more</div>
        <img
          className="logo-autism-sketches-icon"
          alt=""
          src={autism}
        />
      </div>
      <div className="understoodorg">
        <div className="button-3" onClick={onButton3Click} />
        <div className="understood-is-a">
          Understood is a Non profit organization focused on shaping the world
          for difference.
        </div>
        <div className="learn-more2">Learn more</div>
        <img
          className="logo-understood-icon"
          alt=""
          src={understood}
        />
      </div>
      <div className="ocd-gamechangers">
        <div className="button-4" onClick={onButton4Click} />
        <div className="ocd-gamechangers-is">
          OCD Gamechangers is an organization that helps people with OCD and
          create a community.
        </div>
        <div className="explore-here">Explore Here</div>
        <img
          className="ocdgamechangers-logo-icon"
          alt=""
          src={ocd}
        />
      </div>
      <div className="mentalhealthnet">
        <div className="button-5" onClick={onButton5Click} />
        <div className="mentalhealthnet-provides-onli">
          Mentalhealth.net provides online mental health and wellness education
          for those wanting to learn.
        </div>
        <div className="explore-here1">Explore Here</div>
        <img
          className="logo-mental-health-icon"
          alt=""
          src={mentalHealth}
        />
      </div>
      <div className="the-neurodivergent-nurse">
        <div className="button-6" onClick={onButton6Click} />
        <div className="the-neurodivergent-nurse1">{`The Neurodivergent Nurse is a podcast run by a neurodivergent herself , talks about her struggles. `}</div>
        <div className="explore-here2">Explore Here</div>
        <img className="logo-mental-health-icon" alt="" src={tnn} />
      </div>
      <div className="stories" data-scroll-to="sTORIESText">
        STORIES
      </div>
      <div className="footer" />
      <div className="copyright">
        <p className="neurodivers-2023">
          ©neurodivers 2023 . All Rights Reserved.
        </p>
        <p className="autism">Privacy Terms FAQ</p>
      </div>
      <div className="made-with-love">
        <div className="made-with">{`Made with `}</div>
        <img className="heart-icon" alt="" src={love} />
      </div>
      <div className="navbar">
        <div className="web-logo">
          <div className="logo">
            <img
              className="download-removebg-preview-1"
              alt=""
              src={logo}
            />
            <div className="neurodivers">neurodivers</div>
          </div>
        </div>
        <div className="main-menu">
          <div className="menu">
            <div className="about1" onClick={onAboutTextClick}>
              About
            </div>
            <div className="home" onClick={onHomeTextClick}>
              Home
            </div>
            <div
              className="neurodivergence"
              onClick={onNeurodivergenceTextClick}
            >
              Neurodivergence
            </div>
            <div className="resources1" onClick={onResourcesTextClick}>
              Resources
            </div>
            <div className="stories1" onClick={onStoriesTextClick}>
              Stories
            </div>
          </div>
        </div>
      </div>
      <div className="ellipse-neurodiversity-parent">
        <div className="ellipse-neurodiversity" />
        <div className="neurodiversity">NEURODIVERSITY</div>
        <div className="neurodiversity-is-the-container">
          <p className="autism">
            <b className="neurodiversity1">Neurodiversity</b>
            <span>
              {" "}
              is the concept that there are a variety of ways that people's
              brains process information, function, and present behaviorally.
              Rather than thinking there is something wrong or problematic when
              some people don't operate similarly to others, neurodiversity
              embraces all differences.
            </span>
          </p>
          <p className="autism">&nbsp;</p>
          <p className="autism">
            The concept of neurodiversity recognizes that both brain function
            and behavioral traits are simply indicators of how diverse the human
            population is.
          </p>
          <p className="autism">&nbsp;</p>
          <p className="autism">
            <b>Neurotypical</b>
          </p>
          <p className="autism">
            Neurotypical is a descriptor that refers to someone who has the
            brain functions, behaviors, and processing considered standard or
            typical.
          </p>
          <p className="autism">&nbsp;</p>
          <p className="autism">
            <b>Neurodivergent</b>
          </p>
          <p className="autism">
            Neurodivergent is the term for when someone's brain processes,
            learns, and/or behaves differently from what is considered "typical.
          </p>
        </div>
        <img
          className="female-solidarity-img"
          alt=""
          src={threeWomen}
        />
        <div className="neurodivergence-types">NEURODIVERGENCE TYPES</div>
      </div>
      <div className="input-component-parent">
        <div className="input-component">
          <div className="share-your-experiences">{`Share your experiences here! `}</div>
        </div>
        <div className="button-41" onClick={onButton41Click} />
        <div className="submit">Submit</div>
      </div>
    </div>
  );
};

export default Desktop1;
