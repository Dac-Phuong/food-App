import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
    },
    top : {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
    },
    register:{
        paddingTop:10,
    },
    center : {
        flex: 2,
        marginHorizontal:20,
    },
    text :{
        fontSize : 20,
        color : "black",
        justifyContent:'center',
        alignItems: 'center',
        fontWeight:"bold",
        fontFamily: 'Gilroy-Light'
    },
    input : {
        position :"relative",
        width : "100%",
        backgroundColor: "#0,0,0,0",
        height : 36 ,
        fontSize:13,
        borderBottomWidth:1,
        borderColor: "#E9E9E9",
        autoComplete:"",
        fontFamily: 'Gilroy-Light'
    },
    heading : {
        fontSize: 13,
        paddingTop: 10,
        color : "#7C7C7C",
        fontFamily: 'Gilroy-Light'
    },
    title:{
        fontSize: 13,
        color : "#7C7C7C",
        fontFamily: 'Gilroy-Light'
    },
    fogot:{
        fontSize: 13,
        paddingTop:10,
        color:"#7C7C7C",
        fontFamily: 'Gilroy-Light',

    },
    singup:{
        fontSize: 13,
        lineHeight: 20,
        paddingTop:10,
        color :"#53B175"
    },
    have :{
        fontSize: 13,
        paddingTop:15,
        fontFamily: 'Gilroy-Light'
    },
    footer :{
        marginTop: 10,
        width: "100%",
        borderRadius:"10%",
        alignItems:'center',
        justifyContent:'center',
    },
    submit:{
        paddingVertical:15,
        textAlign:'center',
        backgroundColor:'#68a0cf',
        borderRadius: 15,
        borderWidth: 1,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#fff',
        width:"100%",
        height:60,
        backgroundColor:"#53B175",
    },
    singin:{
        color:"#fff",
        fontSize: 16,
        fontWeight:"bold"
    },
    check:{
        position :'absolute',
        width:17,
        height:17,
        bottom:5,
        right:0,
    },
    eye:{
        position :'absolute',
        width:20,
        height:20,
        bottom:0,
        right:0,
    }
    
})
export default styles;