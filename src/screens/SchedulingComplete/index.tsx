import React from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useWindowDimensions, StatusBar } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
    Container,
    LogoWrapper,
    Content,
    Title,
    Message,
    Footer,
} from './styles';


export function SchedulingComplete() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleConfirm() {
        navigation.navigate('Home');
    }

    return(
        <Container>
            <StatusBar 
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />

            <LogoWrapper>
                <LogoSvg width={width} />
            </LogoWrapper>

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton title='OK' onPress={handleConfirm} />
            </Footer>
        </Container>
    );
}