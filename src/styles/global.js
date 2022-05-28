import { StyleSheet, StatusBar, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({

  global: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
  },
  container_enter_screens: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4A5F3",
  },
  textInput: {
    borderColor: "black",
    color: "#000000",
    width: '85%',
    padding: 5,
    paddingRight: 10,
    fontSize: 17,
    borderWidth: 2,
    marginBottom: '2%',
    textAlign: "right",
    borderRadius: 5,
    backgroundColor: "#fffffa",
  },
  loading: {
    flex: 1,
  },
  mapScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  ////////////////////////////////////////////////
  landing_imageArea: {
    margin: 25,
  },
  landing_title_text: {
    color: "#fdc123",
    fontSize: 50,
    fontWeight: "bold",
    margin: -5,
  },
  landing_reg_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    marginTop: 2,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 3,
    borderRadius: 7,
    elevation: 2,
    backgroundColor: "#000000",
  },
  landing_reg_btn_text: {
    color: "#fdc123",
    fontSize: 15,
    fontWeight: "bold",
  },
  landing_log_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    marginTop: 15,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 3,
    borderRadius: 7,
    elevation: 2,
    backgroundColor: "#fdc123",
  },
  landing_log_btn_text: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  ////////////////////////////////////////////////
  enter_button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fdc123",
  },
  enter_btn_text: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
    bottom: 20,
    borderRadius: 100,
    overflow: "hidden",
  },
  logo_image_area: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  already_have: {
    fontSize: 15,
    fontFamily: "sans-serif",
    color: "black",
    fontWeight: "bold",
    paddingTop: 20,
  },
  blue_btn: {
    paddingTop: 20,
    marginBottom: 4,
    fontSize: 15,
    fontFamily: "sans-serif",
    color: "blue",
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
  forgot_title: {
    top: 1,
    marginBottom: 30,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  ////////////////////////////////////////////////
  fill_title_text: {
    color: "#fdc123",
    fontSize: 30,
    fontWeight: "bold",
  },
  reg_bdate: {
    flexDirection: 'row'
  },
  datePicker: {
    marginLeft: '22%',
  },
  picker: {
    flex: 1,
    margin: 2,
    fontSize: 10,
  },
  reg_choose: {
    textAlign: "right",
    width: '85%',
    height: 28,
    marginLeft: '-19%',
  },
  ////////////////////////////////////////////////
  draw_pic_name: {
    alignItems: "center",
    margin: '3%',
  },
  drawer_pic: {
    height: 85,
    width: 85,
    borderRadius: 100,
  },
  drawer_name: {
    color: "#fff",
    fontSize: 20,
  },
  drawer_props: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: '2%',
  },
  sign_out_area: {
    padding: '5%',
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  sign_out: {
    flexDirection: "row",
    alignItems: "center",
  },
  sign_out_text: {
    fontSize: 15,
    marginRight: '3%',
  },
  stage1: {
    flexDirection: "column",
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '10%',
    marginBottom: '2%',
  },
  stage2: {
    backgroundColor: "#C4A5F3",
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: '5%',
  },
  stage3: {
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: '5%',
  },
  touchable_profile_pic: {
    height: 35,
    width: 35,
    position: 'absolute',
    right: '2%',
    top: '3%',
    borderRadius: 100,
  },
  hamburger_profile_pic: {
    flexDirection: "row",
  },
  profile_edit_btn: {
    position: 'absolute',
    left: '3%',
    top: '2%',
  },
  profile_edit_btn_text: {
    color: "#c8c8c8",
  },
  profile_pic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
    marginBottom: '3%',
  },
  profile_title: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: '3%',
  },
  edit_profile_pic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    //alignItems: "center",
    justifyContent: "center",
    marginBottom: '3%',
  },
  profile_details: {
    fontWeight: "bold",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '1%',
  },
  profile_line: {
    width: '100%',
    borderWidth: 3,
    borderColor: '#fee6a7',
    //marginTop: '2%',
    //marginBottom: '5%',
  },
  picAndDetails: {
    alignItems: "center",
    justifyContent: "center",
  },
  side_details: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: '3%',
  },
  side_details_comp: {
    flexDirection: "row",
    marginLeft: '2%',
    marginBottom: '2%',
  },
  side_details_text: {
    fontWeight: "bold",
    textAlign: "left",
    justifyContent: "center",
    fontSize: 13,
    marginLeft: '2%',
    flexWrap: "wrap",
  },
  profile_project: {
    backgroundColor: "#fdc123",
    borderWidth: 2,
    borderColor: "black",
    width: '92%',
    marginLeft: '4%',
    borderRadius: 25,
    marginTop: '10%',
  },
  profile_project_txt: {
    textAlign: "center",
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    margin: '2%',
    marginBottom: '5%',
  },
  line: {
    width: '100%',
    borderWidth: 0.8,
    borderColor: 'black',
    marginBottom: '5%',
  },
  //////////////////project///////////////////////
  project_details_view: {
    flexDirection: 'row',
    marginBottom: '3%',
  },
  project_title_details: {
    color: "black",
    marginLeft: '3%',
    fontSize: 15,
    fontWeight: "bold",
  },
  project_details: {
    color: "black",
    //marginLeft: '1%',
    fontSize: 15,
  },
  ////////////////////////////////////////////////
  plus_btn: {
    position: 'absolute',
    bottom: '7%',
    left: '5%',
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: "#a77ce8",
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderWidth: 2,
    borderRadius: 100,
    // padding: '1%',
  },
  plus_btn_text: {
    textAlign: 'center',
    color: "#fdc123",
    fontSize: 18,
    fontWeight: "bold",
    padding: '2%',
  },
  title_creat_post: {
    textAlign: "center",
    fontSize: 25,
    color: "#fdc123",
    fontWeight: "bold",
    top: '1.5%',
    marginBottom: '5%',
  },
  create_post_text: {
    marginLeft: '3%',
    color: "#000000",
    width: '94%',
    height: '60%',
    textAlignVertical: 'top',
    marginBottom: '3%',
    padding: 10,
    fontSize: 20,
    textAlign: "right",
    borderRadius: 10,
  },
  choose_img: {
    width: '15%',
    position: 'absolute',
    bottom: '8.5%',
    right: '5%',
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: "#fdc123",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 8,
  },
  choose_img_text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  create_post_img: {
    height: '75%',
    marginTop: '2%',
    //width: '92%',
    //marginLeft: '4%',
    resizeMode: 'stretch',
    resizeMode: 'contain',
  },
  to_post: {
    position: 'absolute',
    bottom: '8%',
    left: '5%',
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: "#a77ce8",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 100,
    padding: 10,
  },
  to_post_text: {
    color: "#fdc123",
    fontWeight: "bold",
    fontSize: 20,
  },
  ////////////////////////////////////////////////
  feed: {
    // marginTop: '-7.5%',
    // bottom: '4.5%',
    backgroundColor: "#fee6a7",
  },
  empty_feed: {
    color: "#fdc123",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
  },
  list_of_posts: {
    width: '100%',
    marginBottom: '1%',
    backgroundColor: "#ffffff"
  },
  post: {
    width: '100%',
    paddingBottom: '1%',
    marginTop: '-1%',
    backgroundColor: "#ffffff"
  },
  post_text: {
    textAlign: "left",
    margin: '3%',
    fontSize: 17,
  },
  post_img: {
    width: '100%',
    height: 375,
    paddingBottom: '2%',
    resizeMode: 'stretch',
    resizeMode: 'contain',
  },
  edit_post: {
    color: "#C8C8C8",
    alignSelf: 'flex-end',
    position: 'absolute',
    top: '1.5%',
    right: '2.5%',
  },
  edit_comment: {
    color: "#595959",
    alignSelf: 'flex-end',
    position: 'absolute',
    top: '5%',
    right: '4%',
  },
  user_pic: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: "hidden",
    margin: '2%',
  },
  user_name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  user_date: {
    fontSize: 13,
    color: "#808080",
    textAlign: "left",
  },
  user_pic_name: {
    flexDirection: "row",
    alignItems: "center",
  },
  name_date: {
    flexDirection: "column",
  },
  take_a_pic: {
    flexDirection: "row",
    marginBottom: "7%",
  },
  take_a_pic_btn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#000000",
  },
  take_a_pic_btn_text: {
    fontSize: 15,
    color: "#fdc123",
    fontWeight: "bold",
  },
  like_comment: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "10%",
    marginRight: "10%",
    // paddingBottom: "1%",
    marginTop: "1%",
  },
  details_like_comment: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "3%",
    //marginRight: '1%',
  },
  info_like_comment: {
    flexDirection: "row",
    marginBottom: "1%",
  },
  like_comment_btn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  like_comment_btn_txt: {
    color: "#cecece",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: "5%",
  },
  info_like_comment_txt: {
    color: "#cecece",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: "5%",
  },
  like_comment_line: {
    width: "94%",
    marginLeft: "3%",
    borderWidth: 0.2,
    borderColor: "#e2e2e2",
    marginTop: "1%",
    marginBottom: "1%",
  },
  /////////////////Forum_Topic/////////////////
  forum_title_text: {
    flex: 1,
    color: "#fdc123",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    // marginBottom: "5%",
  },
  forums_titles: {
    alignItems: "center",
    backgroundColor: "#e2e2e2",
    padding: "5%",
    // marginBottom: "5%",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 25,
  },
  forums_titles_txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#a77ce8",
  },
  /////////////////Forum_Subject/////////////////
  open_sub_btn: {
    position: "absolute",
    bottom: "3%",
    left: "5%",
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "#a77ce8",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 100,
    padding: 5,
  },
  open_sub_btn_text: {
    color: "#fdc123",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  subjects: {
    marginTop: "1%",
  },
  subjects_txt: {
    fontSize: 18,
    color: "#a77ce8",
    fontWeight: "bold",
    margin: "2%",
    marginBottom: "5%",
  },
  comment: {
    backgroundColor: "#e2e2e2",
    paddingBottom: "2%",
    marginBottom: "2%",
    width: "92%",
    marginLeft: "4%",
    borderRadius: 25,
  },
  first_comment: {
    backgroundColor: "#fff89e",
    paddingBottom: "2%",
    marginBottom: "2%",
    width: "92%",
    marginLeft: "4%",
    borderRadius: 25,
  },
  comment_data: {
    marginLeft: "15%",
  },
  /////////////////Forum_Create_Thread/////////////////
  create_thread: {
    flex: 13,
    // marginTop: "15%",
    // marginLeft: "5%",
  },
  create_thread_title: {
    fontSize: 25,
    marginBottom: 20,
  },
  create_thread_first_cmnt: {
    fontSize: 20,
  },
  /////////////////Forum_Thread/////////////////
  tread_title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#a77ce8",
  },
  tread_comments: {
    marginLeft: "2%",
  },
  /////////////////Forum_Comment/////////////////
  Forum_Comment: {
    flexDirection: "row",
    marginBottom: "1%",
    borderColor: "black",
    //borderWidth: 1,
    padding: "4%",
    borderRadius: 20,
    width: "92%",
    marginLeft: "4%",
  },
  Forum_Comment_Text: {
    width: "80%",
  },
  Forum_Button: {
    position: "absolute",
    bottom: "25%",
    right: "4%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10%",
    paddingLeft: "5%",
    backgroundColor: "#a77ce8",
    borderRadius: 100,
    width: 45,
    height: 45,
  },

  /////////////settings////////////////////
  settingsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4A5F3",
  },

  settingsBtn: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 17,
    marginBottom: 17,
    borderRadius: 10,
    backgroundColor: "#FFD260",
    width: "45%",
  },
  settingsBtnText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    flex: 1,
    backgroundColor: "#C4A5F3",
    paddingTop: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modal_btn: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 17,
    marginBottom: 17,
    borderRadius: 10,
    backgroundColor: "#FFD260",
    width: "45%",
  },

  delete_text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: "10%"
  },
  msg_text: {
    borderColor: "black",
    color: "#000000",
    width: "85%",
    height: "25%",
    padding: 5,
    paddingRight: 10,
    fontSize: 17,
    borderWidth: 2,
    textAlign: "right",
    borderRadius: 5,
    backgroundColor: "#fffffa",
    textAlignVertical: "top"
  },

  //////////wanted/////////
  wanted_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 40,
    marginRight: '10%',
    marginLeft: '10%',
  },
  wanted_list_item: {
    margin: 10,
    padding: 5,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 4,
  },
  wanted_text_title: {
    fontSize: 17,
    fontWeight: "bold", 
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2",
    borderRadius: 20,
    margin: 2,
  },
  wanted_text: {
    fontSize: 17,
    fontWeight: "bold", 
    textAlign: "center",
    alignItems: "center",
  },
  wanted_header: {
    color: "#fdc123",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  wanted_add_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4A5F3",
  },
  wanted_new_title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "55%",
    marginBottom: "5%",
    marginTop: "8%"
  },

  wanted_text_input: {
    borderColor: "black",
    color: "#000000",
    width: '85%',
    padding: 5,
    paddingRight: 10,
    fontSize: 17,
    borderWidth: 2,
    marginBottom: '2%',
    textAlign: "right",
    borderRadius: 5,
    backgroundColor: "#fffffa",
  },
  wanted_btn: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
