import Modal from "../components/layout/Modal";
import ModalButton from "../components/ui/ModalButton";
import { useState } from "react";
import { Text, Button, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import LoginGift from "../components/ui/LoginGift";
import { color } from "../constants/color";

const DailyLogin = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const handeReceive = () => {

  }

  return (
    <>
      <Button title="Daily Log-In" onPress={handleModal} />
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Header title="DAILY LOGIN"/>
          <Modal.Body>
            <View style={styles.content}>
                <View style={styles.line1}>
                    <LoginGift 
                        color='#FFE9B8'
                        day='Day 1'
                        money='10$'
                        onPress={handeReceive}
                    />
                    <LoginGift 
                        color="#A7CA57"
                        day='Day 2'
                        money='20$'
                        onPress={handeReceive}
                    />
                    <LoginGift 
                        color="#F8C748"
                        day='Day 3'
                        money='30$'
                        onPress={handeReceive}
                    />
                </View>
                <View style={styles.line2}>
                    <LoginGift 
                        color="#A3A8FF"
                        day='Day 4'
                        money='40$'
                        onPress={handeReceive}
                    />
                    <LoginGift 
                        color="#C6E9ED"
                        day='Day 5'
                        money='50$'
                        onPress={handeReceive}
                    />
                    <LoginGift 
                        color='#FF889E'
                        day='Day 6'
                        money='60$'
                        onPress={handeReceive}
                    />
                </View>
                {/* <View style={styles.bigGift}> */}
                    <TouchableOpacity style={styles.bigGift}>
                        <Text style={{fontFamily: 'OrelegaOne', fontSize: 18}}>Day 7</Text>
                        <Image
                            source={require('./../assets/images/big-gift.png')}
                            style={{
                                height: 40, width: 40
                            }}
                        />
                        <Text style={{fontFamily: 'OrelegaOne', fontSize: 18, color: color.colors.white}}>100$</Text>
                    </TouchableOpacity>
                {/* </View> */}
            </View>
          </Modal.Body>
          <Modal.Footer>
            <ModalButton title="Receive" onPress={handleModal} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#F7E9E1",
        height: 330,
        borderRadius: 30,
        marginTop: 40,
    }, 
    line1 : {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
    },
    line2 : {
        flexDirection: 'row',
        padding: 20,
        paddingTop: -20,
        justifyContent: 'space-between'
    },
    bigGift: {
        backgroundColor: '#9F229C',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 30,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DailyLogin;
