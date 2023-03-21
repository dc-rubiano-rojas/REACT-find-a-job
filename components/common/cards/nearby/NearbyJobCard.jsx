import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './nearbyjobcard.style'

import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate()}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW78diNmGXJFMicpY9eXHKV4sqz05H.jpg'
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>



      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_job_title}
        </Text>

        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>
      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard