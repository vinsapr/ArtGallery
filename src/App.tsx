import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';

import Text from './components/Text';

import {assets} from './assets/assets';
import * as appTheme from './assets/custom-theme.json';
import Button from './components/Button';
import {ButtonVariant} from './components/Button/index.type';
import Card from './components/Card';

interface ICol {
  numRows: number;
  children: any;
}

interface IRow {
  children: string;
}

const dummyData = [
  {
    id: 1,
    name: 'Pemandangan 1',
    image: assets.image.image1,
    like: 0,
  },
  {
    id: 2,
    name: 'Pemandangan 2',
    image: assets.image.image2,
    like: 0,
  },
  {
    id: 3,
    name: 'Pemandangan 3',
    image: assets.image.image3,
    like: 0,
  },
];

const Col = ({numRows, children}: ICol) => {
  const styleCol = numRows === 2 ? styles.col2 : styles.col3;
  return <View style={styleCol}>{children}</View>;
};

const Row = ({children}: IRow) => <View style={styles.row}>{children}</View>;

function App(): JSX.Element {
  const [data, setData] = useState(dummyData);

  const likeImage = (props: any) => {
    const dataIndex = dummyData.findIndex(n => n.id === props.id);
    const like = (props.like += 1);
    dummyData[dataIndex] = {...props, like};

    setData(dummyData);
    console.log(data);
    return {dummyData};
  };

  const dislikeImage = (props: any) => {
    const dataIndex = dummyData.findIndex(n => n.id === props.id);
    const like = (props.like -= 1);
    dummyData[dataIndex] = {...props, like};

    setData(dummyData);
    console.log(data);
    return {dummyData};
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text
          variant={'headline'}
          color={appTheme['color-black']}
          marginTop={28}
          marginBottom={14}
          textAlign="center">
          Art Gallery
        </Text>
        <View style={styles.buttonHead}>
          <Row>
            <Col numRows={3}>
              <Button
                onPress={() => {}}
                label={'Like All'}
                margin={4}
                padding={6}
              />
            </Col>
            <Col numRows={3}>
              <Button
                onPress={() => {}}
                label={'Reset All'}
                margin={4}
                padding={6}
                variant={ButtonVariant.white}
              />
            </Col>
            <Col numRows={3}>
              <Button
                onPress={() => {}}
                label={'Dislike All'}
                margin={4}
                padding={6}
                variant={ButtonVariant.red}
              />
            </Col>
          </Row>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Card
                onPressLike={() => likeImage(item)}
                onPressDislike={() => dislikeImage(item)}
                totalLike={item.like}
                data={item}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  buttonHead: {
    flex: 3,
    marginHorizontal: 'auto',
    width: '100%',
    marginBottom: 4,
    paddingTop: 4,
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: 'transparent',
  },
  col2: {
    backgroundColor: 'green',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 2,
  },
  col3: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 3,
  },
};

export default App;
