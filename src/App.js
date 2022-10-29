

import React, { useState } from 'react';
import music_data from './music-data.json'
import SongCard from './components/SongCards/SongCard';
import SearchBar from './components/SearchBar/SearchBar';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList
} from 'react-native';


function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({ item }) => <SongCard song={item} />
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.conteiner}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
        />
      </View>
    </SafeAreaView>
  )
}

export default App;
const styles = StyleSheet.create({
  conteiner: { flex: 1 },
});