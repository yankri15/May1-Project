import React, { useState } from "react";
import { Text, TextInput, View, Pressable, Alert, Image } from "react-native";
import { globalStyles } from '../../styles/global';
import AuthProvider, { useAuth } from "../../AuthProvider/AuthProvider";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        try {
            setError("");
            setLoading(true);
            await login(email, password);
        } catch (err) {
            setError("Failed to login");
            console.log(error + ":\n " + err);
            switch (err.code) {
                case 'auth/invalid-email':
                    Alert.alert('Email pattern is wrong')
                    break;
                case 'auth/user-not-found':
                    Alert.alert('User not exist')
                    break;
                case 'auth/wrong-password':
                    Alert.alert('Wrong password')
                    break;
            }
        }
        setLoading(false);
    }

    return (
        <AuthProvider>
            <View style={globalStyles.container_enter_screens}>
                <View style={globalStyles.logo}>
                    <Image source={require('../../../assets/app_icon.png')} style={globalStyles.logo_image_area} resizeMode="center"></Image>
                </View>
                <TextInput
                    style={globalStyles.textInput}
                    placeholder="מייל"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={globalStyles.textInput}
                    placeholder="סיסמה"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                <Pressable style={globalStyles.enter_button} title="Login"
                    onPress={handleLogin}
                    disabled={loading}>
                    <Text style={globalStyles.enter_btn_text}>כנס</Text>
                </Pressable>
                <Text style={globalStyles.blue_btn} onPress={() => { navigation.navigate("ForgotPassword"); }}>שכחתי סיסמה</Text>
            </View>
        </AuthProvider>
    );
};

export default LoginScreen;