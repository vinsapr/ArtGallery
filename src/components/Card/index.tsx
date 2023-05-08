import {View, Image, ImageSourcePropType} from 'react-native';
import {ButtonVariant} from '../Button/index.type';
import styles from './styles';
import {ICard} from './index.type';
import React from 'react';
import Button from '../Button';

const Card = ({
  onPressLike,
  onPressDislike,
  totalLike,
  data,
}: ICard): React.ReactElement => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={data?.image as ImageSourcePropType}
      />
      <View style={styles.buttonCard}>
        <Button
          onPress={() => {}}
          label={`${totalLike} Like`}
          margin={4}
          padding={4}
          variant={ButtonVariant.white}
        />
        <View style={styles.buttonCardRight}>
          <Button
            onPress={onPressLike}
            label={'Like'}
            margin={4}
            padding={4}
            variant={ButtonVariant.blue}
          />
          <Button
            onPress={onPressDislike}
            label={'Dislike'}
            margin={4}
            padding={4}
            variant={ButtonVariant.red}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Card);
