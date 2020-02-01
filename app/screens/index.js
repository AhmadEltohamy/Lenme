/*
Loan Request Details Screen which has three main parts
1- The borrower's credit score section
2- The borrower's financial health section
3- The investor's offer information section
*/

//Import
import React from 'react';
import CreditScoreComponent from '../components/creditscore';
import FinancialHealthComponent from '../components/financailhealth';
import OfferInformationComponent from '../components/offerinformation';
import {
    SafeAreaView,
    ScrollView
} from 'react-native';

class LoanRequestDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: 'IO',
                profilePicture: require('../../assets/profilepicture.png')
            },
            FinancialHealth: [
                {
                    title: 'PAYMENT HISTORY',
                    detail: '1 yr 5 mos',
                    type: 'primary',
                    info: 'some info'
                },
                {
                    title: 'CREDIT UTILIZATION',
                    detail: '100%',
                    type: 'primary',
                    info: 'some info'
                },
                {
                    title: 'TOTAL ACCOUNTS',
                    detail: '2',
                    type: 'secondary',
                    info: 'some info'
                },
                {
                    title: 'TOTAL ACCOUNTS',
                    detail: '11%',
                    type: 'secondary',
                    info: 'some info'
                },
                {
                    title: 'ANNUAL INCOME',
                    detail: '$53,000/yr',
                    type: 'secondary',
                    info: 'some info'
                },
                {
                    title: 'DEROGATORY MARKS',
                    detail: '3',
                    type: 'secondary',
                    info: 'some info'
                }
            ],
            scoreDetails: [
                {
                    title: 'LENME SCORE',
                    icon: require('../../assets/logo1.png'),
                    score: '73',
                    info: 'some info'
                },
                {
                    title: 'CREDIT SCORE',
                    icon: require('../../assets/logo2.png'),
                    score: '500 - 630',
                    info: 'some info'
                }
            ]
        };
    };

    render() {
        return (
            <>
                <SafeAreaView>
                    <ScrollView>
                        <CreditScoreComponent
                            profilePicture={this.state.user.profilePicture}
                            username={this.state.user.username}
                            scoreDetails={this.state.scoreDetails}
                        />
                        <FinancialHealthComponent
                            FinancialHealthDetails={this.state.FinancialHealth}
                        />
                        <OfferInformationComponent
                            investmentAmount={970}
                            paybackPeriod={1}
                        />
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    };
};

//Export
export default LoanRequestDetailsPage;