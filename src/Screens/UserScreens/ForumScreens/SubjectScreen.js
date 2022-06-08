import { Entypo } from "@expo/vector-icons";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuTrigger,
  renderers
} from "react-native-popup-menu";
import { db } from "../../../../firebase";
import UserPicName from "../../../API/UserPicName";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import { useData } from "../../../AuthProvider/UserDataProvider";
import { globalStyles } from "../../../styles/global";
const SubjectScreen = ({ route, navigation }) => {
  const { currentUser } = useAuth();
  const { deleteThread, admin } = useData();
  const [thread, setThread] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const [threadLocation, setThreadLocation] = useState("");
  const { Popover } = renderers;

  const handleRefresh = () => {
    getThread()
      .then(() => {
        setRefreshing(false);
      })
      .catch(console.error);
  };

  const topicData = route.params.item;
  const getThread = async () => {
    setThread([]);
    const docRef = collection(
      db,
      "forum",
      topicData.topicId,
      topicData.topicName
    );
    setThreadLocation(docRef);
    const docSnap = await getDocs(docRef);

    docSnap.docs.forEach((element) => {
      setThread((prev) => [
        ...prev,
        {
          ...topicData,
          threadId: element.id,
          threadTitle: element.data().title,
          uid: element.data().uid,
        },
      ]);
    });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getThread()
        .then(() => {
          setRefreshing(false);
        })
        .catch(console.error);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {
        <FlatList
          style={globalStyles.subjects}
          data={thread}
          renderItem={({ item }) => (
            <View>
              <Pressable
                onPress={() => navigation.navigate("אשכול", { item })}
              >
                {
                  <Menu
                    renderer={Popover}
                    rendererProps={{ preferredPlacement: "right" }}
                    style={globalStyles.dots}
                  >
                    <MenuTrigger>
                      {item.uid == currentUser.uid || admin == 1 ? (
                        <Entypo name="dots-three-horizontal" size={20}></Entypo>
                      ) : null}
                    </MenuTrigger>
                    <MenuOptions style={globalStyles.delete_dots_btn}>
                      <Pressable
                        style={globalStyles.edit_comment}
                        onPress={() => {
                          deleteThread(threadLocation, item.threadId).then(
                            () => {
                              handleRefresh();
                            }
                          );
                        }}
                      >
                        <Text style={globalStyles.delete_dots_text}>מחק</Text>
                      </Pressable>
                    </MenuOptions>
                  </Menu>
                }
                <UserPicName uid={item.uid} navigation={navigation} />
                <Text style={globalStyles.subjects_txt}>
                  {item.threadTitle}
                </Text>
                <View style={globalStyles.line}></View>
              </Pressable>
            </View>
          )}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          ListEmptyComponent={() => {
            return (
              <View>
                <Text style={globalStyles.be_first}>
                  נראה שאין מה להציג כרגע..
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      }
      <Pressable
        title="Create thread"
        style={globalStyles.open_sub_btn}
        onPress={() => {
          navigation.navigate("יצירת נושא חדש", {
            topicId: topicData.topicId,
            topicName: topicData.topicName,
          });
        }}
      >
        <Text style={globalStyles.open_sub_btn_text}>נושא חדש</Text>
      </Pressable>
    </View>
  );
};

export default SubjectScreen;
