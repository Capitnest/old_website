import React from "react";
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Ad() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      borderRadius="4px"
      backgroundColor="#805AD5"
      color="white"
      marginTop="20px"
    >
      <Flex>
        <Image>
          <img src="/images/learn/write.png" alt="write" />
        </Image>
        <Text>
          <h1>Are you a writer?</h1>
          <h2>Start posting your articles about web3 for FREE on Capitnest</h2>
          <p>
            We will give you all the credit for your articles and you can still
            post them anywhere else. Expose yourself to a new community of
            crypto enthusiasts.
          </p>
          <Button
            onClick={onOpen}
            marginTop="7px"
            backgroundColor="#322659"
            color="white"
          >
            Become a Writer
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Become a writer on Capitnest</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Hi. If you are reading this, that means that you are interested
                on publishing articles on Capitnest. To become a writer you
                simply need to email us at capitnest@proton.me
                <br />
                <br />
                What are the benefits of publishing your articles on Capitnest?
                Well.. you will get exposed to a whole new audience of crypto
                enthusiasts (and give you all the credit for your articles), we
                will even pay you, on the number of views that your articles
                will get, plus some other small benefits (for more information
                email us).
                <br />
                <br />
                Sounds fair?.. Join us, we can't wait for you to become part of
                our team :)
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="red"
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
                <a href="mailto:capitnest@proton.me" target="_blank">
                  <Button colorScheme="blue">Email Us</Button>
                </a>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Text>
      </Flex>
    </Box>
  );
}

const Text = styled.div`
  h1 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 10px;
    font-family: "Inter", sans-serif;
  }

  h2 {
    font-size: 20px;
    font-family: "Inter", sans-serif;
  }

  p {
    margin-top: 10px;
    font-family: "Inter", sans-serif;
    width: 530px;
  }
`;

const Image = styled.div`
  img {
    margin: 10px;

    object-fit: cover;
    height: 175px;
    width: 200px;
  }
`;
