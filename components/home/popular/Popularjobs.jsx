import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { useRouter } from 'expo-router'

import useFetch from '../../../hook/useFetch'
import { COLORS, SIZES } from "../../../constants";
import styles from './popularjobs.style'
import PopularJobCard from "../../common/cards/popular/PopularJobCard";



const Popularjobs = () => {
  const router = useRouter()
  
  const { data, isLoading, error } = useFetch('search', {
    query: 'Python developer in Texas, USA',
    num_pages: '1',
    page: '1'
  }) 

  const [selectedJob, setSelectedJob] = useState(null)
  const handleCardPress = (item) => {
    console.log('handleCardPress');
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Something went wrong</Text>
        ) : <FlatList
          data={data}
          renderItem={({ item }) => (
            <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
        />}
      </View>

    </View>
  )
}

export default Popularjobs