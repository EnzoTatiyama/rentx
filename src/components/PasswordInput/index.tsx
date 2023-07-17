import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
    Container,
    InputText,
    IconContainer,
} from './styles';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'],
}

export function PasswordInput({
    iconName,
    ...rest
}: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const theme = useTheme();

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState);
    }

    return (
        <Container {...rest}>
            <IconContainer>
                <Feather 
                    name={iconName}
                    size={24}
                    color={theme.colors.text_detail}
                />
            </IconContainer>

            <InputText 
                {...rest} 
                secureTextEntry={isPasswordVisible}
            />

            <BorderlessButton onPress={handlePasswordVisibilityChange} >
                <IconContainer>
                    <Feather
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color={theme.colors.text_detail}
                    />
                </IconContainer>
            </BorderlessButton>
        </Container>
    );
}