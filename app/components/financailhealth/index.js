//Import
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../styles/colors';
import styles from '../../../styles/styles';
import {
    View,
    Image,
    Text
} from 'react-native';

FinancialHealthComponent = (props) => {
    return (
        <View style={styles.FinancialHealthMainContainer}>
            {
                props.FinancialHealthDetails.map((item) =>
                    <View style={[styles.FinancialHealthCard, styles.shadowBox, { borderLeftColor: colors[item.type] }]}>
                        <View style={styles.rowSpaceBetween}>
                            <Text style={styles.scoreTitle}>{item.title}</Text>
                            <Icon name="info" size={17} color={colors.yellow} />
                        </View>
                        <Text style={styles.FinancialHealthCardSubText}>
                            {item.detail}
                        </Text>
                    </View>
                )
            }
        </View>
    );
};

//Export
export default FinancialHealthComponent;