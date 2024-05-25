import { VStack, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ComponentMapping from "@/components/data/content";

const Mapping = () => {
  const router = useRouter();
  const Sidebar_Titles = Object.keys(ComponentMapping).map(
    (key) => ComponentMapping[key].name
  );

  console.log(Sidebar_Titles);
  useEffect(() => {
    const path = router.asPath.split("/");
    console.log(path);
    const id = path[path.length - 1];
    console.log(id);
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  const handleNavigation = (id) => {
    router.push(`#${id}`, undefined, { shallow: true });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <VStack spacing={4} align="center" p={8}>
      {Sidebar_Titles.map((title, id) => (
        <Button key={title} onClick={() => handleNavigation(title)}>
          {title}
        </Button>
      ))}

      {Object.keys(ComponentMapping).map((key) => {
        const Component = ComponentMapping[key];
        const title = Component.name;
        return (
          <Box key={title} id={title}>
            <Heading>{title}</Heading>
            <Component />
          </Box>
        );
      })}
    </VStack>
  );
};

export default Mapping;

import { Box, Heading } from "@chakra-ui/react";

const Components = ({ id, title }) => {
  return (
    <>
      {Object.keys(ComponentMapping).map((key) => {
        // const title = formatTitle(key);
        const Component = ComponentMapping[key];
        return (
          <Box key={title}>
            <Component id={title} />
          </Box>
        );
      })}
    </>
  );
};
