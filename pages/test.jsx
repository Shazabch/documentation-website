import React from "react";
import {
  Code,
  VStack,
  useClipboard,
  useColorMode,
  Button,
} from "@chakra-ui/react";

const Example = () => {
  const { colorMode } = useColorMode();
  const jsonCode = `{
    "DateIssued": "01 March 2022",
    "Issuer": "PSA",
    "subject": {
      "Suffix": "",
      "lName": "RIZAL",
      "fName": "JOSE",
      "mName": "ALONZO",
      "sex": "Male",
      "BF": "[1,2]",
      "DOB": "January 1, 1970",
      "POB": "Calamba, Laguna",
      "PCN": "1234-4567-6789-1234"
    },
    "alg": "EDDSA",
    "signature": "lq3F1234kLI70mZG2/9WvQSUZi0EGS08AH9nKLMANRaXscYTmfPm7OYaP0qrTRPlnkGY7RlDCtV+krBj1xshAg=="
  }`;
  const { hasCopied, onCopy } = useClipboard(jsonCode);

  return (
    <VStack w="full" borderRadius="md" textAlign="left" gap="0">
      <Code
        p="2"
        w="full"
        h="full"
        pos="relative"
        bg="gray.700"
        color={colorMode === "light" ? "white" : "inherit"}
      >
        Request Body:
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          <code>{jsonCode}</code>
        </pre>
      </Code>
      <Button pos="absolute" top="0" right="0" onClick={onCopy}>
        {hasCopied ? "JSON copied!" : "Copy JSON"}
      </Button>
    </VStack>
  );
};

export default Example;
