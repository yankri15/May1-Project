import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { ref } from "firebase/storage";
import { db, storage } from "../../firebase";
import { collection, doc, getDoc, query, getDocs } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import { async } from "@firebase/util";
import { getDownloadURL } from "firebase/storage";
import { globalStyles } from "../styles/global";
import UserPicName from "./UserPicName";

const Post = ({ postID, navigation }) => {
    const [postData, setPostData] = useState("");
    const [comments, setCommnets] = useState("");
    const [url, setUrl] = useState();

    useEffect(() => {
        const getpostData = async () => {
            const q = doc(db, "posts", postID);
            const docSnap = await getDoc(q);
            setPostData(docSnap.data());
            console.log(docSnap.data().downloadURL);


            const docRef = ref(storage, docSnap.data().downloadURL);
            await getDownloadURL(docRef).then((uri) => {
                console.log(uri);
                setUrl(uri);
            })
        };

        const getComments = async () => {
            const subCOl = collection(db, "posts", postID, "comments");
            const qSnap = await getDocs(subCOl);
            setCommnets(qSnap.docs);
        };

        getpostData().catch(console.error);
        //getComments().catch(console.error);
        return;
    }, []);

    return (
        <SafeAreaView>
            <View style={globalStyles.post}>
                <UserPicName navigation={navigation} />
                <Text style={globalStyles.post_text}>{postData && postData.postText}</Text>
                {url && <Image source={{ uri: url }} style={globalStyles.post_img} />}
            </View>
        </SafeAreaView>
    );
};

export default Post;