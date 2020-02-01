//Import
import React, { useState } from 'react';
import Slider from "react-native-slider";
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors'
import styles from '../../styles/styles';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';


OfferInformationComponent = (props) => {
    
    const [interests, setInterests] = useState(0);
    return (
        <View style={styles.OfferInformationMainContainer}>
            <View style={styles.OfferInfoRow}>
                <View style={styles.OfferInformationItem}>
                    <Text style={styles.OfferInfoItemTitle}>
                        Investment amount
                </Text>
                    <View style={styles.OfferInfoItemDetail}>
                        <Text style={styles.OfferInformationItemDetailSymbol}>$</Text>
                        <Text style={styles.OfferInformationItemDetailNumber}>{props.investmentAmount}</Text>
                    </View>
                </View>
                <View style={styles.OfferInformationItem}>
                    <Text style={styles.OfferInfoItemTitle}>
                        Payback period
                </Text>
                    <View style={styles.OfferInfoItemDetail}>
                        <Text style={styles.OfferInformationItemDetailNumber}>{props.paybackPeriod}</Text>
                        <Text style={styles.OfferInformationItemDetailSymbol}>month</Text>
                    </View>
                </View>
            </View>
            <View style={styles.annualContainer}>
                <Text style={styles.OfferInfoItemTitle}>
                    Annual interest
            </Text>
                <Text style={styles.scoreTitle}>Recommended interest rate 3%</Text>
                <View style={styles.OfferInfoItemDetail}>
                    <Text style={styles.OfferInformationItemDetailNumber}>{interests}</Text>
                    <Text style={styles.OfferInformationItemDetailSymbol}>%</Text>
                </View>
                <View style={styles.silder}>
                    <Slider
                        minimumValue={0}
                        maximumValue={100}
                        step={1}
                        thumbTintColor={colors.white}
                        thumbStyle={styles.shadowBox}
                        onValueChange={(value) => setInterests(value)}

                        customMinimumTrack={
                            <LinearGradient
                                colors={[colors.light_blue, colors.purple_dark]}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={{ flex: 1 }}
                            />
                        }
                    />
                    <View style={styles.rowSpaceBetween}>
                        <Text style={[styles.scoreTitle, { fontSize: 10 }]}>0%</Text>
                        <Text style={[styles.scoreTitle, { fontSize: 10 }]}>100%</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={[styles.Btn, styles.shadowBox]}>
                        <Text style={[styles.buttonText, { color: colors.red }]}>
                            Dismiss
                    </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        colors={[colors.light_blue, colors.purple_dark]}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        style={[styles.Btn, styles.shadowBox]}>
                        <Text style={styles.buttonText}>
                            Make Offer
                    </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

//Export
export default OfferInformationComponent;