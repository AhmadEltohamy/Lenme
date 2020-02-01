
//Import
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../../styles/styles';
import colors from '../../../styles/colors';
import {
    View,
    Image,
    Text
} from 'react-native';

CreditScoreComponent = (props) => {
    return (
        <View style={styles.creditScoreMainContainer}>
            <View style={styles.userProfilePictureContainer}>
                <Image
                    style={styles.userProfilePicture}
                    source={props.profilePicture}
                />
            </View>
            <View style={styles.creditScoreDetailsContainer}>
                <Text style={styles.username}>{props.username}</Text>
                <View style={[styles.rowSpaceBetween,
                { justifyContent: 'flex-start' }]}>
                    {
                        props.scoreDetails.map((item) =>
                            <ScoreComponent
                                title={item.title}
                                icon={item.icon}
                                score={item.score}
                                info={item.info}
                            />
                        )
                    }
                </View>
                <Text style={[styles.scoreTitle, { fontSize: 10 }]}>
                    Vantage Score 4.0
                </Text>
            </View>
        </View>
    );
};
ScoreComponent = (props) => {
    return (
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreTitle}>{props.title}</Text>
            <View style={styles.rowSpaceBetween}>
                <Image
                    style={styles.scoreIcon}
                    source={props.icon}
                />
                <Text style={styles.scoreValue}>{props.score}</Text>
                <Icon name="info" size={17} color={colors.yellow} />
            </View>

        </View>
    );
};    

//Export
export default CreditScoreComponent;
export default ScoreComponent;
