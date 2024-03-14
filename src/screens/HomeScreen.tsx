import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  ButtonText,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Link,
} from "@gluestack-ui/themed";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import ModalAvatar from "../components/modalAvatar/ModalAvatar";
import ModalTopUp from "../components/modalTopUp/ModalTopUp";
import { AvatarBadge } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ModalAvatar from "../components/modalAvatar/modalAvatar";

const bg1 = require("../../assets/background/bg1.jpg");
const logo = require("../../assets/logo/logo2.png");
const diamond = require("../../assets/logo/diamond.png");
const img = require("../../assets/image/play-img.png");
const avatar = require("../../assets/image/avatar.jpg");

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={bg1} style={styles.container} blurRadius={3}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={20}
        px={15}
      >
        <Image source={logo} alt="logo" size="sm" />
        {/* <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          bg="#353d41"
        >
          <Image source={diamond} size={"2xs"} alt="diamond" />
          <Text textAlign="center" color="$white" px={8}>
            999999
          </Text>
          <TouchableOpacity>
            <Box bg="lime" px={3} py={2}>
              <Icon name="plus" size={20} color="white" onPress={() => {<ModalTopUp/>}} />
            </Box>
          </TouchableOpacity>
        </Box> */}
      </Box>
      <ModalTopUp />

      <Box display="flex" alignItems="center" justifyContent="center" mt={50}>
        <Link onPress={() => console.log("clicked edit profile")}>
          <Avatar bgColor="$amber600" size="xl" borderRadius="$full" borderWidth={2}>
           
            <AvatarImage alt="avatar" source={avatar} />
          </Avatar>
        </Link>
        <ModalAvatar />

        <Heading color="$white" size="2xl" italic={true}>
          Kura-kura Ninja
        </Heading>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" mt={200}>
        <Image
          alt="image"
          mt={-200}
          size="2xl"
          width={400}
          height={400}
          source={img}
        />
        <Button
          size="md"
          mt={-50}
          bg="$green600"
          w={200}
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => console.log("clicked play game")}
        >
          <ButtonText>Play </ButtonText>
        </Button>
      </Box>

      {/* <StatusBar hidden /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
