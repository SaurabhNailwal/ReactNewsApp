import React from 'react';
import { TouchableNativeFeedback, Linking, View} from 'react-native';
import moment from 'moment';
import { Card, Text, Divider } from 'react-native-elements';

export default class Article extends React.Component {

   render() {
     const {
         title,
         description,
         publishedAt,
         source,
         urlToImage,
         url
     } = this.props.article;

     const { noteStyle, featuredTitleStyle } = styles;

     const time = moment(publishedAt || moment.now()).fromNow();
     
     const defaultImg =
       'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-Abstract-digital-art-venice-canal-PIC-WPD008855-1024x640.jpg';

     return (
         <TouchableNativeFeedback
           useForeground
           onPress={() => Linking.openURL(url)}
         >
           <Card
            featuredTitle={title}
            featuredTitleStyle={featuredTitleStyle}
            image={{uri: urlToImage || defaultImg}}
           >
            <Text style={{ marginBottom: 10}}>
              { description || 'Read More..' }
            </Text>
            <Divider style={{ backgroundColor: '#dfe6e9' }} />
            <View 
              style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
              <Text style={noteStyle}>{time}</Text>
            </View>
           </Card>         
         </TouchableNativeFeedback>
     );
   } 
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
}; 