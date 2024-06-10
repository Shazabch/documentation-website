import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const Component1 = () => {
  return (
    <div
      id="component1"
      style={{ height: "100vh", backgroundColor: "lightcoral" }}
    >
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      Component 1
    </div>
  );
};

const Component2 = () => {
  return (
    <div
      id="component2"
      style={{ height: "100vh", backgroundColor: "lightblue" }}
    >
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      Component 2
    </div>
  );
};

const Component3 = () => {
  return (
    <div
      id="component3"
      style={{ height: "100vh", backgroundColor: "lightgreen" }}
    >
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      Component 3
    </div>
  );
};

const Component4 = () => {
  return (
    <div
      id="component4"
      style={{ height: "100vh", backgroundColor: "lightgoldenrodyellow" }}
    >
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      Component 4
    </div>
  );
};

const Component5 = () => {
  return (
    <div
      id="component5"
      style={{ height: "100vh", backgroundColor: "lightpink" }}
    >
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      Component 5
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const headingRefs = useRef([null, null, null, null, null]);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const componentIndex =
            parseInt(entry.target.id.replace("component", ""), 10) - 1;
          const headingIndex =
            headingRefs.current[componentIndex]?.findIndex(
              (ref) => ref && ref.offsetTop >= entry.boundingClientRect.top
            ) || 0;
          const heading = `heading${headingIndex + 1}`;
          router.push(`#/${entry.target.id}/${heading}`, undefined, {
            shallow: true,
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.3, // Lower threshold to make detection more sensitive
    });

    // Directly select elements by their IDs
    const sections = [
      "component1",
      "component2",
      "component3",
      "component4",
      "component5",
    ];
    sections.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        headingRefs.current[index] = Array.from(
          element.querySelectorAll("h1, h2, h3, h4, h5")
        );
      }
    });

    return () => observer.disconnect();
  }, [router]);

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      {" "}
      {/* Enable smooth scrolling */}
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <style jsx global>{`
        html {
          scroll-behavior: smooth; /* Global smooth scroll */
        }
      `}</style>
    </div>
  );
}
