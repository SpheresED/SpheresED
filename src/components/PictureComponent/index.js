import { View, Image } from "react-native";
import styles from "./styles";

const PictureComponent = (props) => {
  const { picture } = props;

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: picture.pictureUri }} style={styles.image} />
    </View>
  );
};

export default PictureComponent;
