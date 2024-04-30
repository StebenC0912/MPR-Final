import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import RNModal from "react-native-modal";
import { color } from "../../constants/color";

const Modal = ({
  isVisible = false,
  children,
  ...props
}) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }) => (
  <View style={styles.header}>
    <Image
        source={require("./../../assets/images/ribbon 1.png")}
        style={styles.image}
    />
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({ children }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: "#CD7F5B",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  header: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: -45.5,
    textAlign: "center",
    fontSize: 24,
    fontFamily: 'Alfa',
    fontSize: 18,
    color: color.colors.white
  },
  body: {
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  image : {
    height: 59,
    width: 224,
    marginTop: -25
  }
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
