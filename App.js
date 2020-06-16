import React, {useState} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert, FlatList } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy coffee', key:1},
    {text:'go to work', key:2},
    {text:'code', key:3},
  ]);
  
  const submitHandler= (newtext)=>{
    if(newtext.length>3){
      setTodos((prevTodos)=>{
        return[
          {text:newtext, key:Math.random().toString()},
          ...prevTodos
        ]
      })
    } else if(newtext.length==0){
      Alert.alert('OOPS', 'Cannot add an empty string as a todo',[
        {text:'Close', onPress:()=>console.log('alert closed')}
      ])
    } else{
      Alert.alert('OOPS!', 'the Todo must be of a minimum length of 4',[
        {text:'Close', onPress:()=>console.log('alert closed')}
      ]);
    }
  }
  
  const pressHandle = (id)=>{
    setTodos((prevTodos)=>{
      return(
        prevTodos.filter((todo)=>todo.key!=id)
      )
    })
  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
          {/* Header */}
          <Header/>
          
          {/* Content */}
          <View style={styles.content} >
            {/* form */}
            <Input submitHandler={submitHandler} />
            {/* List */}
            <View style={styles.list}>
              <FlatList
                data={todos}
                keyExtractor = {(items)=>items.key.toString()}
                renderItem = { ({ item })=>(
                  <TodoList item={item} pressHandle={pressHandle} />
                ) }
              />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    width:'100%',
    padding:10,
    flex:1,
    backgroundColor:'whitesmoke'
  },
  list:{
    borderStyle:'solid',
    borderRadius:5,
    paddingTop:10,
    borderTopWidth:5,
    borderColor:'maroon',
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth:0,
    padding:15,
    backgroundColor:'#Ccc',
    flex:1
  }
});
