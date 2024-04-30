import React, { useState } from 'react';
import { Text, Button, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Modal from "../components/layout/Modal";
import ModalButton from "../components/ui/ModalButton";
import LoginGift from "../components/ui/LoginGift";
import { color } from "../constants/color";
import { useStats } from '../store/StatContext'; // Đảm bảo đường dẫn đúng

const DailyLogin = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { modifyBankBalance } = useStats(); // Sử dụng hook để lấy hàm cập nhật số dư ngân hàng

  const handleModal = () => setIsModalVisible(!isModalVisible);

  const getCurrentDayOfWeek = () => new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.

  const handleReceiveReward = (dayId, rewardAmount) => {
    const todayDayOfWeek = getCurrentDayOfWeek();
    if (dayId === todayDayOfWeek) {
      modifyBankBalance(rewardAmount);  // Cập nhật số dư ngân hàng với số tiền phần thưởng
      console.log("Reward received for day:", dayId);
      handleModal(); // Close modal after receiving reward
    } else {
      console.log("Today is not the correct day for this reward.");
    }
  };

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
                        day='Day 1 (Sun)'
                        money='100$'
                        onPress={() => handleReceiveReward(0, 100)}
                    />
                    <LoginGift 
                        color="#A7CA57"
                        day='Day 2 (Mon)'
                        money='200$'
                        onPress={() => handleReceiveReward(1, 200)}
                    />
                    <LoginGift 
                        color="#F8C748"
                        day='Day 3 (Tue)'
                        money='300$'
                        onPress={() => handleReceiveReward(2, 300)}
                    />
                </View>
                <View style={styles.line2}>
                    <LoginGift 
                        color="#A3A8FF"
                        day='Day 4 (Wed)'
                        money='400$'
                        onPress={() => handleReceiveReward(3, 400)}
                    />
                    <LoginGift 
                        color="#C6E9ED"
                        day='Day 5 (Thu)'
                        money='500$'
                        onPress={() => handleReceiveReward(4, 500)}
                    />
                    <LoginGift 
                        color='#FF889E'
                        day='Day 6 (Fri)'
                        money='600$'
                        onPress={() => handleReceiveReward(5, 600)}
                    />
                </View>
                <TouchableOpacity style={styles.bigGift} onPress={() => handleReceiveReward(6, 1000)}>
                    <Text style={{ fontFamily: 'OrelegaOne', fontSize: 18 }}>Day 7 (Sat) - 1000$</Text>
                    <Image
                        source={require('./../assets/images/big-gift.png')}
                        style={{ height: 40, width: 40 }}
                    />
                </TouchableOpacity>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <ModalButton title="Close" onPress={handleModal} />
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
