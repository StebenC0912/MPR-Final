import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native"
import { color } from "../../constants/color";

const LoginGift = ({onPress, day, money, color }) => {
    return (
            <TouchableOpacity 
                style={{
                    backgroundColor: color,
                    width: 80, height: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20
                }} 
                onPress={onPress}
            >
                <Text style={styles.day}>{day}</Text>
                <Image
                    source={require('./../../assets/images/money-bag.png')}
                    style={styles.image}
                />
                <Text style={styles.money}>{money}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30
    },
    day: {
        fontFamily: 'OrelegaOne',
        fontSize: 18
    },
    money: {
        fontFamily: 'OrelegaOne',
        fontSize: 18, 
        color: color.colors.white
    }
});

export default LoginGift;