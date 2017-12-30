import React, { Component } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';



export default class AccordionView extends Component {
  constructor(props)
  {
    super(props);
  }
  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderContent(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    const SECTIONS = [
      {
        title: 'First',
        content: 'Lorem ipsum...',
      },
      {
        title: 'Second',
        content: 'Lorem ipsum...',
      }
    ];
    return (
      <Accordion
        sections={SECTIONS}
        renderHeader={this.renderHeader.bind(this)}
        renderContent={this.renderContent.bind(this)}
      />
    );
  }
}
