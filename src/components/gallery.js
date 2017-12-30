import Gallery from 'react-native-photo-gallery';

export default class YourGalleryComponent extends Component {
  render() {
    const data = [
      {
        id: 'first image',
        image: require('../../assets/images/engimatic.jpg'),
        thumb: require('../../assets/images/engimatic.jpg'),

      },
      {
        id: 'Second image',
        image: require('../../assets/images/engimatic.jpg'),
        thumb: require('../../assets/images/engimatic.jpg'),

      }
    ];

    return <Gallery data={data} />;
  }
}
